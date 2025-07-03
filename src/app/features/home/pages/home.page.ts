import { Component } from '@angular/core';
import { PageContainerComponent } from '../../../shared/layout/page-container/page-container.component';

@Component({
  standalone: true,
  selector: 'app-home-page',
  templateUrl: './home.page.html',
  imports: [PageContainerComponent],
})
export class HomePage {}
