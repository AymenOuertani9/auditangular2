import { Component, OnInit } from '@angular/core';
import {RisquesServiceService} from '../../Service/risques-service.service';
import {Router} from '@angular/router';
import {Risques} from '../../Model/Risques';

@Component({
  selector: 'app-questionaire',
  templateUrl: './questionaire.component.html',
  styleUrls: ['./questionaire.component.css']
})
export class QuestionaireComponent implements OnInit {
  risques: any;
  // @ts-ignore
  risque = new Risques();
  page = 1;

  totalRecord: number;

  // tslint:disable-next-line:variable-name
  constructor(private risquesService: RisquesServiceService, private _route: Router) {
  }

  ngOnInit(): void {
    this.getRisques();
  }

  // tslint:disable-next-line:typedef
  private getRisques() {
    console.log(this.risquesService.getRisqueList());
    this.risquesService.getRisqueList().subscribe(
      data => {
        console.log('data id  ' + data);
        this.risques = data;
        console.log(this.risques)
      }
    );
    
  }

  // tslint:disable-next-line:typedef
  gotoEditRisque(id: number) {
    console.log('id' + id);
    this._route.navigate(['/editrisque', id]);
  }
  // tslint:disable-next-line:typedef
  gotoAddRisque() {
    this._route.navigate(['/newrisques']);
  }
  // tslint:disable-next-line:typedef
  deleteRisque(id: number) {
    this.risquesService.deleteRisqueById(id).subscribe(
      data => {
        console.log('delete succesfully');
        this._route.navigate(['/questionaire']);
      },
      error => console.log('Exception' )

    );

    this.ngOnInit();

  }
  // tslint:disable-next-line:typedef
  gotoListClient() {
    this._route.navigate(['/ListClient']);
  }
  // tslint:disable-next-line:typedef
  gotoRapport(){
    this._route.navigate(['/rapport']);
  }
}
