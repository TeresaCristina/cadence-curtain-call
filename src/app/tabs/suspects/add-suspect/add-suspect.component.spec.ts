import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSuspectComponent } from './add-suspect.component';

describe('AddSuspectComponent', () => {
  let component: AddSuspectComponent;
  let fixture: ComponentFixture<AddSuspectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSuspectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSuspectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
