import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {RisquesServiceService} from '../../Service/risques-service.service';
import {Router} from '@angular/router';
import {ExcelServiceService} from '../../Service/excel-service.service';
import * as jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import * as jspdf from 'jspdf';

@Component({
  selector: 'app-rapport',
  templateUrl: './rapport.component.html',
  styleUrls: ['./rapport.component.css']
})
export class RapportComponent implements OnInit {
  // tslint:disable-next-line:variable-name
  constructor(private risquesService: RisquesServiceService, private _route: Router, private  excelService: ExcelServiceService) {
  }

  @ViewChild('content') content: ElementRef;
  jsPDF: any;
  listrisques: any;
  page = 1;
  rapport: any;

  totalRecord: number;
  title = 'htmltopdf';

  ngOnInit(): void {
    this.getRisques();
    this.risquesService.getRisqueList().subscribe(
      data => {
        this.listrisques = data;
        console.log('data id  ' + data);
        console.log(this.listrisques)
      }
    );
  }

  // tslint:disable-next-line:typedef
  private getRisques() {
    this.risquesService.getRisqueList().subscribe(
      data => {
        console.log('data id  ' + data);
        this.listrisques = data;
        console.log(this.listrisques)
      }
    );
  }

  exportAsXLXS(): void {
    this.excelService.exportAsExcelFile(this.listrisques, 'sample');
  }

  // tslint:disable-next-line:typedef
  public downloadPDF() {
    // @ts-ignore
    const doc = new jsPDF();
    const specialElementHandlers = {
      // tslint:disable-next-line:only-arrow-functions typedef
      '#editor'(element, renderer) {
        return true;
      }
    };
    const content = this.content.nativeElement;
    doc.fromHTML(content.innerHTML, 15, 15, {
      width: 190,
      elementHandlers: specialElementHandlers
    });
    doc.save('test.pdf');
  }
  // tslint:disable-next-line:typedef
  gotoquestionaire(){
    this._route.navigate(['/questionaire']);
  }
}
