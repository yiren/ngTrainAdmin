import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAverageTrainHoursComponent } from './get-average-train-hours.component';

describe('GetAverageTrainHoursComponent', () => {
  let component: GetAverageTrainHoursComponent;
  let fixture: ComponentFixture<GetAverageTrainHoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetAverageTrainHoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAverageTrainHoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
