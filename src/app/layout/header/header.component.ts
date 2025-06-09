import { Component } from '@angular/core';
import {
  Bell,
  ChevronDown,
  CircleHelp,
  Compass,
  ComponentIcon,
  FolderOpenDot,
  LucideAngularModule,
} from 'lucide-angular';
import { TooltipComponent } from '../../shared/components/tooltip/tooltip.component';
import { PopoverComponent } from './popover/popover.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    LucideAngularModule,
    TooltipComponent,
    PopoverComponent,
    RouterLink,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  readonly Logo = ComponentIcon;
  readonly Project = FolderOpenDot;
  readonly ChevronDown = ChevronDown;
  readonly DiscoverProject = Compass;
  readonly Community = CircleHelp;
  readonly Notification = Bell;
}
