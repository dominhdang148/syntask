import { Component } from '@angular/core';
import { PageContainerComponent } from '../../../shared/layout/page-container/page-container.component';
import { TicketOverviewComponent } from '../components/ticket-overview/ticket-overview.component';

@Component({
  standalone: true,
  selector: 'app-home-page',
  templateUrl: './home.page.html',
  imports: [PageContainerComponent, TicketOverviewComponent],
})
export class HomePage {}
