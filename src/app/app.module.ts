import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TicketFormularComponent } from './ticket-formular/ticket-formular.component';
import { TicketsComponent } from './tickets/tickets.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment';
import { AuthModule } from './auth/auth.module';
import { TicketService } from './services/ticket.service';
import { reducers } from './app.reducer';
import { UIService } from './services/ui.Service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TicketFormularComponent,
    TicketsComponent,
    HeaderComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    AppRoutingModule,
    FlexLayoutModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AuthModule,
    StoreModule.forRoot(reducers)
  ],
  providers: [TicketService, UIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
