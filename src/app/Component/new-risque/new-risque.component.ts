import { Component, OnInit } from '@angular/core';
import {RisquesServiceService} from '../../Service/risques-service.service';
import {Router} from '@angular/router';
import {Risques} from '../../Model/Risques';

@Component({
  selector: 'app-new-risque',
  templateUrl: './new-risque.component.html',
  styleUrls: ['./new-risque.component.css']
})
export class NewRisqueComponent implements OnInit {
  risque = new Risques();
  // tslint:disable-next-line:variable-name
  constructor(private  _route: Router,  private risquesService: RisquesServiceService) { }

  ngOnInit(): void {
  }
// tslint:disable-next-line:typedef
  addrisqueformsubmit(){
    console.log(this.risque);
    this.risque.reponse="non";
    this.risquesService.addRisqueToRemote(this.risque).subscribe(
      data =>
      {
        console.log('data added');
        this._route.navigate(['questionaire']);
      },
      error => console.log('error')
    );
  }
// tslint:disable-next-line:typedef
  gotolist(){
    this._route.navigate(['questionaire']);

  }
}
