import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EshkolComponent } from './eshkol.component';

describe('EshkolComponent', () => {
  let component: EshkolComponent;
  let fixture: ComponentFixture<EshkolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EshkolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EshkolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
