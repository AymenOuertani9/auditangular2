import { Component, OnInit } from '@angular/core';
import {Rendezvous} from '../../Model/Rendzvous';
import {Router} from '@angular/router';
import {AjoutRendezVousService} from '../../Service/ajout-rendez-vous.service';
import {FormControl, FormGroup} from '@angular/forms';
import { data } from 'jquery';
import { TokenStorageService } from 'src/app/Service/token-storage.service';

@Component({
  selector: 'app-ajout-rendez-vous',
  templateUrl: './ajout-rendez-vous.component.html',
  styleUrls: ['./ajout-rendez-vous.component.css']
})
export class AjoutRendezVousComponent implements OnInit {

  rendezvous = new Rendezvous();
  rendezvous1: any;
  rv : any;
  currentuser:any;

  // tslint:disable-next-line:variable-name
  constructor(private  _route: Router, private  rendezvousService: AjoutRendezVousService, private token: TokenStorageService) {
  }

  ngOnInit(): void {
    console.log(this.currentuser = this.token.getUser());
  }

  // tslint:disable-next-line:typedef
  addrendezvousformsubmit() {
    //console.log(this.rendezvousService.getrendezvousList());
    //console.log(this.rendezvous1);
    console.log("new rv");
    console.log(this.rendezvous);
    //this.rendezvous1 = this.rendezvousService.addRendezvous(this.rendezvous);
    console.log("rv1"+this.rendezvous1);
    this.rendezvousService.saveRendezvous(this.rendezvous);
    /*if (this.rendezvous1 == !null) {
      this.rendezvousService.saveRendezvous(this.rendezvous);
      console.log('data est ajouté');

    } else {
      console.log('imposible de prendre un rendez_vous');
    }*/
  }


}
