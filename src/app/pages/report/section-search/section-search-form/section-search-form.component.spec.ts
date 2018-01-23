import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionSearchFormComponent } from './section-search-form.component';

describe('SectionSearchFormComponent', () => {
  let component: SectionSearchFormComponent;
  let fixture: ComponentFixture<SectionSearchFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionSearchFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
