import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionSearchResultComponent } from './section-search-result.component';

describe('SectionSearchResultComponent', () => {
  let component: SectionSearchResultComponent;
  let fixture: ComponentFixture<SectionSearchResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionSearchResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionSearchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
