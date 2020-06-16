import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AshkelonBeachComponent } from './ashkelon-beach.component';

describe('AshkelonBeachComponent', () => {
  let component: AshkelonBeachComponent;
  let fixture: ComponentFixture<AshkelonBeachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AshkelonBeachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AshkelonBeachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
