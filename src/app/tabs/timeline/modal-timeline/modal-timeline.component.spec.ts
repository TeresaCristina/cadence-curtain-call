import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalTimelineComponent } from './modal-timeline.component';

describe('ModalTimelineComponent', () => {
  let component: ModalTimelineComponent;
  let fixture: ComponentFixture<ModalTimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalTimelineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
