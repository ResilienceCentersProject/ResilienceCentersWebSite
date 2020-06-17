import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InEmergencyComponent } from './in-emergency.component';

describe('InEmergencyComponent', () => {
  let component: InEmergencyComponent;
  let fixture: ComponentFixture<InEmergencyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InEmergencyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InEmergencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
