import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Reclamation} from '../../Model/Reclamation';
import {ReclamationServiceService} from '../../Service/reclamation-service.service';

@Component({
  selector: 'app-list-reclamation',
  templateUrl: './list-reclamation.component.html',
  styleUrls: ['./list-reclamation.component.css']
})
export class ListReclamationComponent implements OnInit {

  private Reclamation;
  reclamations: Observable<Reclamation[]>;
  constructor( private reclamationService: ReclamationServiceService) {  this.getRecommendation(); }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  getRecommendation() {
    this.reclamations = this.reclamationService.listReclamationToRemote();
  }



}
