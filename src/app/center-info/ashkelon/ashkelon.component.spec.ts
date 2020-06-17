import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AshkelonComponent } from './ashkelon.component';

describe('AshkelonComponent', () => {
  let component: AshkelonComponent;
  let fixture: ComponentFixture<AshkelonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AshkelonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AshkelonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
