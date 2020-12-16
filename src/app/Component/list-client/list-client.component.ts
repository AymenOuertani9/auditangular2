
import { User } from 'src/app/Model/User';
import {UserServiceService} from '../../Service/user-service.service';
import {Component, OnInit} from '@angular/core';
import {CommentaireServiceService} from '../../Service/commentaire-service.service';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css']
})
export class ListClientComponent implements OnInit {
  page = 1;

totalRecord: number;
 User: User;
  Users: any;
  Commentaires: any;

  constructor(private UserService: UserServiceService , private  CommentaireService: CommentaireServiceService) { }

  ngOnInit(): void {
    this.getAllUser();
  }
// tslint:disable-next-line:typedef
  getAllUser(){
    this.UserService.getAllUser().subscribe(
      data => {
        this.Users = data;
        this.totalRecord = this.Users.result.length;
        console.log(data);
      }
    );
  }

  // tslint:disable-next-line:typedef
  getAlllcommentairebyUser(){
    // @ts-ignore
    this.CommentaireService.listcommentairebyUser(this.User).subscribe(
      data => {
        this.Commentaires = data;
        console.log(data);
      }
    );
  }



}
