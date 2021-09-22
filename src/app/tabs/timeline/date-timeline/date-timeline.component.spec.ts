import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateTimelineComponent } from './date-timeline.component';

describe('DateTimelineComponent', () => {
  let component: DateTimelineComponent;
  let fixture: ComponentFixture<DateTimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateTimelineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DateTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
