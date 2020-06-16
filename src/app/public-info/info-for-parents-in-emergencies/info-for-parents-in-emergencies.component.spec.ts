import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoForParentsInEmergenciesComponent } from './info-for-parents-in-emergencies.component';

describe('InfoForParentsInEmergenciesComponent', () => {
  let component: InfoForParentsInEmergenciesComponent;
  let fixture: ComponentFixture<InfoForParentsInEmergenciesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoForParentsInEmergenciesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoForParentsInEmergenciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
