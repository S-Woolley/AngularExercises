import { Component } from '@angular/core';
import { NewTicketComponent } from "./new-ticket/new-ticket.component";
import { Ticket } from './ticket.model';
import { TicketComponent } from "./ticket/ticket.component";

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [NewTicketComponent, TicketComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css'
})
export class TicketsComponent {

  tickets: Ticket[] = [];

  onAdd(ticketData: { title: string; text: string; }) {
    const newTicket: Ticket = {
      title: ticketData.title,
      request: ticketData.text,
      status: 'open',
      id : Math.random().toString()
    };
    this.tickets.push(newTicket);
    console.log(this.tickets);
  }

  onCloseTicket(id: string) {
    this.tickets = this.tickets.map((ticket) => {
      if (ticket.id === id) {
        return { ...ticket, status: 'closed' };
      } 
        return ticket;
  }); 
}

}
