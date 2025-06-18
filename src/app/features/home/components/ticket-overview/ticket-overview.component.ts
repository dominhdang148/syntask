import { Component } from '@angular/core';
import { TicketCardSkeletonComponent } from './components/ticket-card-skeleton/ticket-card-skeleton.component';

@Component({
  selector: 'app-ticket-overview',
  standalone: true,
  imports: [TicketCardSkeletonComponent],
  templateUrl: './ticket-overview.component.html',
  styleUrl: './ticket-overview.component.css',
})
export class TicketOverviewComponent {}
