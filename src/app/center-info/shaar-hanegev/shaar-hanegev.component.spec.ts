import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShaarHanegevComponent } from './shaar-hanegev.component';

describe('ShaarHanegevComponent', () => {
  let component: ShaarHanegevComponent;
  let fixture: ComponentFixture<ShaarHanegevComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShaarHanegevComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShaarHanegevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
