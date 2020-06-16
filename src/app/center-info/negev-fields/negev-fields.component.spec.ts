import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NegevFieldsComponent } from './negev-fields.component';

describe('NegevFieldsComponent', () => {
  let component: NegevFieldsComponent;
  let fixture: ComponentFixture<NegevFieldsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NegevFieldsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NegevFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
