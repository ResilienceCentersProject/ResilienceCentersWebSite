import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShomronComponent } from './shomron.component';

describe('ShomronComponent', () => {
  let component: ShomronComponent;
  let fixture: ComponentFixture<ShomronComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShomronComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShomronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
