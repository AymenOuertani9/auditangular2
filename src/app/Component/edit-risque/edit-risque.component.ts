import { Component, OnInit } from '@angular/core';
import {Risques} from '../../Model/Risques';
import {ActivatedRoute, Router} from '@angular/router';
import {RisquesServiceService} from '../../Service/risques-service.service';

@Component({
  selector: 'app-edit-risque',
  templateUrl: './edit-risque.component.html',
  styleUrls: ['./edit-risque.component.css']
})
export class EditRisqueComponent implements OnInit {
  risque = new Risques();
  id: number;

  // tslint:disable-next-line:variable-name
  constructor(private  _route: Router,  private risquesService: RisquesServiceService , private  _activateRouter: ActivatedRoute) { }

  ngOnInit(): void {
    // tslint:disable-next-line:radix
    const  id = parseInt(this._activateRouter.snapshot.paramMap.get('id'));
    this.risquesService.getRisqueById(id).subscribe(
      data =>
      {console.log('received');
       this.risque = data;
      },

      error => console.log('error')
    );
  }
  // tslint:disable-next-line:typedef
  updaterisqueformsubmit(){
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
