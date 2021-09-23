import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTimelineEventComponent } from './edit-timeline-event.component';

describe('EditTimelineEventComponent', () => {
  let component: EditTimelineEventComponent;
  let fixture: ComponentFixture<EditTimelineEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTimelineEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTimelineEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
