import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BedouinSocietyComponent } from './bedouin-society.component';

describe('BedouinSocietyComponent', () => {
  let component: BedouinSocietyComponent;
  let fixture: ComponentFixture<BedouinSocietyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BedouinSocietyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BedouinSocietyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
