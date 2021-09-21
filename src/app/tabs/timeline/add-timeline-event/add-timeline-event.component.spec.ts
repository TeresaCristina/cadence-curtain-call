import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTimelineEventComponent } from './add-timeline-event.component';

describe('AddTimelineEventComponent', () => {
  let component: AddTimelineEventComponent;
  let fixture: ComponentFixture<AddTimelineEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTimelineEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTimelineEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
