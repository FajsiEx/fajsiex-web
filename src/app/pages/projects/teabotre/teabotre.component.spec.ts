import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeabotreComponent } from './teabotre.component';

describe('TeabotreComponent', () => {
  let component: TeabotreComponent;
  let fixture: ComponentFixture<TeabotreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeabotreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeabotreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
