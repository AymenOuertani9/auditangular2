import { Component, OnInit } from '@angular/core';
import { now } from 'jquery';
import { User } from 'src/app/Model/User';
import { AjoutRendezVousService } from 'src/app/Service/ajout-rendez-vous.service';
import { CommentaireServiceService } from 'src/app/Service/commentaire-service.service';
import { ReclamationServiceService } from 'src/app/Service/reclamation-service.service';
import { TokenStorageService } from 'src/app/Service/token-storage.service';
import { UserServiceService } from 'src/app/Service/user-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentuser : any;
  users : any=[];
  reclamation: any;
  commentaire:any;
  rendezvous : any;
  bb=new Date();
  c:any;

  constructor(private us : UserServiceService,private storages : TokenStorageService, private rec : ReclamationServiceService, private cs : CommentaireServiceService,private rdv : AjoutRendezVousService) { 
    this.c=this.bb.toLocaleDateString();
  }

  ngOnInit(): void {

    this.getUser();
    this.getReclamation();
    this.getCommentaire();
    this.getRendezvous();
  }

  private getUser(){

    var s=this.currentuser = this.storages.getUser().username;
    this.us.getUserByUsername(s).subscribe(
      data => {
        console.log(this.users)
        //this.users = data;
        this.users.push(data)
        console.log("data"+data);
        console.log(data.toString)
        console.log(data)
        
        console.log(this.users)
      }
    );
  }

  private getReclamation(){

    //var s=this.currentuser = this.storages.getUser().username;
    this.rec.getReclamationbyUser().subscribe(
      data => {
        console.log(this.reclamation)
        this.reclamation = data;
        //this.reclamation.push(data)
        console.log("hne")
        console.log("data"+data);
        console.log(data.toString)
        console.log(data)
        
        console.log(this.reclamation)
      }
    );
  }

  private getCommentaire(){

    //var s=this.currentuser = this.storages.getUser().username;
    this.cs.listcommentairebyUser().subscribe(
      data => {
        console.log(this.commentaire)
        this.commentaire = data;
        //this.reclamation.push(data)
        console.log("data"+data);
        console.log(data.toString)
        console.log(data)
        
        console.log(this.commentaire)
      }
    );
  }

  private getRendezvous(){

    //var s=this.currentuser = this.storages.getUser().username;
    this.rdv.getrdvbyUser().subscribe(
      data => {
        console.log(this.rendezvous)
        this.rendezvous = data;
        console.log("rv"+this.rendezvous[1].date);
        for(var  i in this.rendezvous){

          this.rendezvous[i].date=new Date(this.rendezvous[i].date).toLocaleDateString();
          this.rendezvous[i].createTime=new Date( this.rendezvous[i].createTime).toLocaleString();
        }
        //this.reclamation.push(data)
        console.log("data"+data);
        console.log(data.toString)
        console.log(data)
        var bb=new Date().toLocaleDateString();
        console.log("ALLOOO "+bb)
        if(this.rendezvous[1].date < bb ){
          console.log("true")
        }
        else {
          console.log("false")
        }
        //var f=today
        
        console.log(this.rendezvous)
      }
    );
  }

}
