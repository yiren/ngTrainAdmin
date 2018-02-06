import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginExplicitFlowComponent } from './login-explicit-flow.component';

describe('LoginExplicitFlowComponent', () => {
  let component: LoginExplicitFlowComponent;
  let fixture: ComponentFixture<LoginExplicitFlowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginExplicitFlowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginExplicitFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
