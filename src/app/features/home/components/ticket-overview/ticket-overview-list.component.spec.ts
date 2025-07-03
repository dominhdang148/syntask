import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketOverviewListComponent } from './ticket-overview-list.component';

describe('TicketOverviewComponent', () => {
  let component: TicketOverviewListComponent;
  let fixture: ComponentFixture<TicketOverviewListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TicketOverviewListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TicketOverviewListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
