import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketFormularComponent } from './ticket-formular.component';

describe('TicketFormularComponent', () => {
  let component: TicketFormularComponent;
  let fixture: ComponentFixture<TicketFormularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketFormularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketFormularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
