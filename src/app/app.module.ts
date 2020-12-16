import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Component/login/login.component';
import { RegisterComponent } from './Component/register/register.component';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthInterceptor} from '../_helpers/authInterceptor';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {ModalModule} from 'ngx-bootstrap/modal';
import {TooltipModule} from 'ngx-bootstrap/tooltip';
import {AuthenticationServiceService} from './Service/authentication-service.service';
import {TokenStorageService} from './Service/token-storage.service';
import {PaginationModule} from 'ngx-bootstrap/pagination';
import { NewRisqueComponent } from './Component/new-risque/new-risque.component';
import { EditRisqueComponent } from './Component/edit-risque/edit-risque.component';
import {ReclamationComponent} from './Component/reclamation/reclamation.component';
import { ListReclamationComponent } from './Component/list-reclamation/list-reclamation.component';
import { CommentaireComponent } from './Component/commentaire/commentaire.component';
import { ListcommentaireComponent } from './Component/listcommentaire/listcommentaire.component';
import { AjoutRendezVousComponent } from './Component/ajout-rendez-vous/ajout-rendez-vous.component';
import {CustomDatePipe} from './Model/custom.datepipe';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CalendarModule, DateAdapter} from 'angular-calendar';
import {adapterFactory} from 'angular-calendar/date-adapters/date-fns';
import { HomeComponent } from './Component/home/home.component';
import {CarouselModule} from 'ngx-bootstrap/carousel';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import {ListClientComponent} from './Component/list-client/list-client.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { FlatpickrModule } from 'angularx-flatpickr';
import 'flatpickr/dist/flatpickr.css';
import { CalendarComponent } from './Component/calendar/calendar.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { QuestionaireComponent } from './Component/questionaire/questionaire.component';
import { RapportComponent } from './Component/rapport/rapport.component';
import {ExcelServiceService} from './Service/excel-service.service';
import {MatIconModule} from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './Component/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NewRisqueComponent,
    EditRisqueComponent,
    ReclamationComponent,
    ListReclamationComponent,
    CommentaireComponent,
    ListcommentaireComponent,
    AjoutRendezVousComponent,
    CustomDatePipe,
    CalendarComponent,
    HomeComponent,
    ListClientComponent,
    CalendarComponent,
    QuestionaireComponent,
    RapportComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    AppRoutingModule,
    FormsModule,
    NgbModalModule,
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    FlatpickrModule.forRoot(),
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    PaginationModule.forRoot(),
    CarouselModule.forRoot(),
    NgxPaginationModule,
    BrowserAnimationsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    MatCardModule,
    CommonModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
    // tslint:disable-next-line:max-line-length
  }, AuthenticationServiceService, TokenStorageService, ExcelServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
