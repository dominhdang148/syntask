import { Component, Input } from '@angular/core';
import { TicketOverview } from '../../../../../../shared/models/ticket-overview';
import { EyeIcon, EyeOffIcon, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-ticket-card',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './ticket-card.component.html',
  styleUrl: './ticket-card.component.css',
})
export class TicketCardComponent {
  @Input() ticket!: TicketOverview;
  readonly visible = EyeIcon;
  readonly hidden = EyeOffIcon;
  isVisible: boolean = true;
  onToggleHidden() {
    this.isVisible = !this.isVisible;
  }
}
