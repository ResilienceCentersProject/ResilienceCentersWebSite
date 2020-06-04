import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorizedZoneComponent } from './authorized-zone.component';

describe('AuthorizedZoneComponent', () => {
  let component: AuthorizedZoneComponent;
  let fixture: ComponentFixture<AuthorizedZoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorizedZoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorizedZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
