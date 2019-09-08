import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchErrorComponent } from './fetch-error.component';

describe('FetchErrorComponent', () => {
  let component: FetchErrorComponent;
  let fixture: ComponentFixture<FetchErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FetchErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FetchErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
