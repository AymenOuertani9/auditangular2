import { Component, OnInit } from '@angular/core';
import {Commentaire} from '../../Model/Commentaire';
import {Router} from '@angular/router';
import {CommentaireServiceService} from '../../Service/commentaire-service.service';

@Component({
  selector: 'app-commentaire',
  templateUrl: './commentaire.component.html',
  styleUrls: ['./commentaire.component.css']
})
export class CommentaireComponent implements OnInit {

  commentaire = new Commentaire();
  // tslint:disable-next-line:variable-name
  constructor(private  _route: Router,  private commentaireService: CommentaireServiceService) { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  addCommentaireformsubmit(){
    this.commentaireService.addcommentaireToRemote(this.commentaire).subscribe(
      data =>
      {
        console.log('data added');
      },
      error => console.log('error')
    );

    this.ngOnInit()
  }

}
