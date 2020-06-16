import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InRoutineComponent } from './in-routine.component';

describe('InRoutineComponent', () => {
  let component: InRoutineComponent;
  let fixture: ComponentFixture<InRoutineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InRoutineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InRoutineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
