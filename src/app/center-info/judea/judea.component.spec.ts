import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JudeaComponent } from './judea.component';

describe('JudeaComponent', () => {
  let component: JudeaComponent;
  let fixture: ComponentFixture<JudeaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JudeaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JudeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
