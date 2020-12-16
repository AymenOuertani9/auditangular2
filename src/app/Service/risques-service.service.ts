import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Risques} from '../Model/Risques';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class RisquesServiceService {
  d: any;
  s: any;
  // tslint:disable-next-line:ban-types
  public host: String = 'http://localhost:8090/risques/';
  //headers = new HttpHeaders();

  constructor(private http: HttpClient, private tok : TokenStorageService) { }
  // tslint:disable-next-line:typedef
  public getRisqueList(){
    //this.headers.append('Accept', 'application/json;charset=UTF-8');
    /*this.d=sessionStorage.getItem("auth-user");
    var obj= JSON.parse(this.d);
    this.s=obj.token;
    console.log(obj.token);
    console.log(this.d);
    const headers = new HttpHeaders().set('Authorization','Bearer ${this.d}')
    const options = { headers: headers };
    */
    //return this.http.get(this.host + 'get', options);
    return this.http.get(this.host + 'get');
  }
  // tslint:disable-next-line:typedef
  public addRisqueToRemote( risques: Risques){
    return this.http.post('http://localhost:8090/risques/save', risques);

  }
  // tslint:disable-next-line:typedef
  public updateRisque(risques: Risques){
    return this.http.post('http://localhost:8090/risques/save', risques);
  }
  public getRisqueById( id: number): Observable<any>{
    return this.http.get('http://localhost:8090/risques/getbyid/' + id);
  }
  public deleteRisqueById( id: number): Observable<any>{
    return this.http.delete('http://localhost:8090/risques/delete/' + id);
  }
}
