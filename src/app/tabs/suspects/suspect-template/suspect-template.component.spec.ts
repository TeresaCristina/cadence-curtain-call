import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuspectTemplateComponent } from './suspect-template.component';

describe('SuspectTemplateComponent', () => {
  let component: SuspectTemplateComponent;
  let fixture: ComponentFixture<SuspectTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuspectTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuspectTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
