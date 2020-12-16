import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Rendezvous} from '../Model/Rendzvous';
import {TokenStorageService} from './../Service/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AjoutRendezVousService {
  roles: string[] = [];
  currentuser:any;

  constructor(private http: HttpClient,private tokenStorage: TokenStorageService) { }
  public getrendezvousList(){
    return this.http.get('http://localhost:8090/rendezvous/getRendezVous');
  }
  // tslint:disable-next-line:typedef
  public addRendezvous( rendezvous: Rendezvous ){
    /*console.log(rendezvous)
    console.log(this.tokenStorage.getUsername());
    console.log(this.tokenStorage.getUser().roles);
    console.log(this.currentuser = this.tokenStorage.getUser().username);
    var s=this.currentuser = this.tokenStorage.getUser().username;
    */
    return this.http.post('http://localhost:8090/rendezvous/ajouterunrendezvous/', rendezvous);
  }
  // tslint:disable-next-line:typedef
  public updaterendezvous(rendezvous: Rendezvous){
    return this.http.post('http://localhost:8090/rendezvous/updateRendezVouz', rendezvous);
  }
  public deleteRendezvousById( id: number): Observable<any>{
    return this.http.delete('http://localhost:8090/rendezvous/deleteRendezvouz/' + id);
  }
  // tslint:disable-next-line:typedef
  public saveRendezvous(rendezvous: Rendezvous){
    //console.log(rendezvous)
    var s=this.currentuser = this.tokenStorage.getUser().username;
    //console.log(s)
    return this.http.post('http://localhost:8090/rendezvous/save/Aymen1993', rendezvous);
  }

  public getrdvbyUser(){
    var s=this.currentuser = this.tokenStorage.getUser().username;
    return this.http.get('http://localhost:8090/rendezvous/getRendezVousByUser/'+s);
  }


}
