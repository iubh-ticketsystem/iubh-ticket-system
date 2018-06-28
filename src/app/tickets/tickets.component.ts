import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Ticket } from './../models/ticket.model';
import { TicketService } from './../services/ticket.service';
import {Observable} from 'rxjs/Observable';
import { AuthService } from '../auth/auth.service';
import { User } from './../models/user.model';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {
  tickets$: Observable<any>;
  answerState: boolean = false;
  ticketToAnswer: Ticket;
  selectedCategory: String;

  categories = [
    {value: '-'},
    {value: 'Prüfungsamt'},
    {value: 'Administration'},
    {value: 'IT-Support'},
    {value: 'Sonstiges'}
  ];

  categoriesTicket = [
    {value: 'Prüfungsamt'},
    {value: 'Administration'},
    {value: 'IT-Support'},
    {value: 'Sonstiges'}
  ];

  uid: String;
  user: User;

  constructor(private ticketService: TicketService, public auth: AuthService) { 
  }

  ngOnInit() {
     this.auth.user.subscribe((user) => {
      if(user) { this.user = user; this.uid = user.uid;
        } else { console.log("Status: no user");
        }
      if (this.auth.canEdit(this.user)) {
        console.log('Status: admin');
        this.loadAllTickets(); 
      } else {
        console.log('Status: user');
        this.loadUserTicket(this.uid);
        }
      })
  }

  private loadAllTickets() {
    this.tickets$ = this.ticketService.getTickets(); 
  }

  private loadUserTicket(uid){
    this.tickets$ = this.ticketService.getUserTickets(uid);
  }

  deleteTicket(event, ticket: Ticket){
    this.ticketService.deleteTicket(ticket);
  }

  answerTicket(event, ticket: Ticket){
    this.answerState = true;
    this.ticketToAnswer = ticket;
  }

  closeTicket(event, ticket: Ticket){
    ticket.status = 'beantwortet';
    this.ticketService.updateTicket(ticket);
  }

  reopenTicket(event, ticket: Ticket){
    ticket.status = 'in Bearbeitung';

    this.ticketService.updateTicket(ticket);
  }

  updateTicket(ticket: Ticket){
    this.answerState = false;
    ticket.status = 'in Bearbeitung';
    ticket.antwortdatum = new Date();
    this.ticketService.updateTicket(ticket);
  }

}
