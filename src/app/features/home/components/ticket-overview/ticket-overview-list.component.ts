import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { TicketCardSkeletonComponent } from './components/ticket-card-skeleton/ticket-card-skeleton.component';
import { TicketOverview } from '../../../../shared/models/ticket-overview';
import { NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { TicketCardComponent } from './components/ticket-card/ticket-card.component';

@Component({
  selector: 'app-ticket-overview',
  standalone: true,
  imports: [
    TicketCardSkeletonComponent,
    NgIf,
    NgFor,
    NgTemplateOutlet,
    TicketCardComponent,
  ],
  templateUrl: './ticket-overview-list.component.html',
  styleUrl: './ticket-overview-list.component.css',
})
export class TicketOverviewListComponent implements OnInit {
  @Input() ticketList!: TicketOverview[];
  @Input() title!: string;
  @Input() emptyContent!: TemplateRef<any>;
  isHiddenVisible: boolean = true;
  hiddenTicketList: TicketOverview[] = [];
  visibleTicketList: TicketOverview[] = [];
  ngOnInit(): void {
    this.visibleTicketList = this.ticketList.filter((ticket) => ticket.visible);
    this.hiddenTicketList = this.ticketList.filter((ticket) => !ticket.visible);
  }

  onToggleVisible() {
    this.isHiddenVisible = !this.isHiddenVisible;
  }
}
