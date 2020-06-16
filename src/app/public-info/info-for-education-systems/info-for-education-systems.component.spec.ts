import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoForEducationSystemsComponent } from './info-for-education-systems.component';

describe('InfoForEducationSystemsComponent', () => {
  let component: InfoForEducationSystemsComponent;
  let fixture: ComponentFixture<InfoForEducationSystemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoForEducationSystemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoForEducationSystemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
