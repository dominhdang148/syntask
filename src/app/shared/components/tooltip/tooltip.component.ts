import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  standalone: true,
  templateUrl: './tooltip.component.html',
  styleUrl: './tooltip.component.css',
})
export class TooltipComponent {
  @Input() label!: string;
}
