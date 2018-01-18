import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AverageTrainSearchFormComponent } from './average-train-search-form.component';

describe('AverageTrainSearchFormComponent', () => {
  let component: AverageTrainSearchFormComponent;
  let fixture: ComponentFixture<AverageTrainSearchFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AverageTrainSearchFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AverageTrainSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
