import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FromTheNewsComponent } from './from-the-news.component';

describe('FromTheNewsComponent', () => {
  let component: FromTheNewsComponent;
  let fixture: ComponentFixture<FromTheNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FromTheNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FromTheNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
