import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtzionComponent } from './etzion.component';

describe('EtzionComponent', () => {
  let component: EtzionComponent;
  let fixture: ComponentFixture<EtzionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtzionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtzionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
