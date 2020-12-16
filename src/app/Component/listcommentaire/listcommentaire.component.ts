import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Commentaire} from '../../Model/Commentaire';
import {CommentaireServiceService} from '../../Service/commentaire-service.service';

@Component({
  selector: 'app-listcommentaire',
  templateUrl: './listcommentaire.component.html',
  styleUrls: ['./listcommentaire.component.css']
})
export class ListcommentaireComponent implements OnInit {

  private commentaire;
  commentaires: Observable<Commentaire[]>;
  constructor( private commentaireservice: CommentaireServiceService  ) { }

  ngOnInit(): void {
    this.getCommentaire();
  }
// tslint:disable-next-line:typedef
  getCommentaire(){
    this.commentaires = this.commentaireservice.listcommentaireToRemote();
  }

}
