import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {TokenStorageService} from './token-storage.service';
import {Observable} from 'rxjs';

 const API_URL = 'http://localhost:8090/user/';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  headers = new HttpHeaders();

  constructor(private http: HttpClient, private token: TokenStorageService) { }
  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }

  getUserByUsername(username){
    //this.headers.append('Accept', 'application/json;charset=UTF-8');
    //const options = { headers: this.headers };
    console.log('username   ', username);

    return this.http.get(API_URL + 'getByUsername/' + username);
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }
  // @ts-ignore
  // tslint:disable-next-line:typedef
  getAllUser(){
    return this.http.get('http://localhost:8090/user/ListUsers' );
  }
}
