import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SderotComponent } from './sderot.component';

describe('SderotComponent', () => {
  let component: SderotComponent;
  let fixture: ComponentFixture<SderotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SderotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SderotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
