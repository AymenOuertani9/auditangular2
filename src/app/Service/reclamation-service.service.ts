import { Injectable } from '@angular/core';
import {Reclamation} from '../Model/Reclamation';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { TokenStorageService } from './token-storage.service';
import { User } from '../Model/User';
import { UserServiceService } from './user-service.service';

@Injectable({
  providedIn: 'root'
})
export class ReclamationServiceService {
  currentuser: any;

  constructor(private http: HttpClient,private tokenStorage: TokenStorageService,private us : UserServiceService,private storages : TokenStorageService) { }
  // tslint:disable-next-line:typedef
  public addreclamationToRemote(reclamation: Reclamation){
    var s=this.currentuser = this.tokenStorage.getUser().username;
    return this.http.post('http://localhost:8090/reclamation/saveReclamation/'+s, reclamation);
  }
// tslint:disable-next-line:typedef
  public listReclamationToRemote(): Observable<any> {
    return this.http.get('http://localhost:8090/reclamation/getReclamations');
  }

  public getReclamationbyUser(): Observable<any>{
    var user=this.currentuser = this.tokenStorage.getUser().username;
    return this.http.get('http://localhost:8090/reclamation/getReclamationByUser/'+user)
  }
}
