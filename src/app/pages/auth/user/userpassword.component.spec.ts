import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { UserPasswordComponent } from './userpassword.component';

describe('UserComponent', () => {
  let component: UserPasswordComponent;
  let fixture: ComponentFixture<UserPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
