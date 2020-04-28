import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterByLocationComponent } from './center-by-location.component';

describe('CenterByLocationComponent', () => {
  let component: CenterByLocationComponent;
  let fixture: ComponentFixture<CenterByLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CenterByLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CenterByLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
