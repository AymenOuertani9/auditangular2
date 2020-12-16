import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Commentaire} from '../Model/Commentaire';
import {User} from '../Model/User';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class CommentaireServiceService {

  constructor(private http: HttpClient,private tokenStorage: TokenStorageService) {
  }
  currentuser:any;

  // tslint:disable-next-line:typedef
  public addcommentaireToRemote(commentaire: Commentaire) {
    var s=this.currentuser = this.tokenStorage.getUser().username;
    return this.http.post('http://localhost:8090/evaluation/saveEvaluation/'+s, commentaire);
  }
  // tslint:disable-next-line:typedef
  public listcommentaireToRemote(): Observable<any> {
    return this.http.get('http://localhost:8090/evaluation/getEvaluations');
  }
  // tslint:disable-next-line:typedef
  public listcommentairebyUser() {
    var s=this.currentuser = this.tokenStorage.getUser().username;
    return this.http.get('http://localhost:8090/evaluation/getEvaluationByUser/' + s);
  }
}
