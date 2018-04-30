import { Component, OnDestroy, OnInit } from '@angular/core';

import { CourseService } from '../../../shared/services/course/course.service';
import { ResetSearchUiAction } from '../store/search.actions';
import { SearchFeatureState } from '../store/search.states';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-course-search',
  templateUrl: './course-search.component.html',
  styleUrls: ['./course-search.component.scss']
})
export class CourseSearchComponent implements OnInit, OnDestroy {
  

  constructor(
    private courseService:CourseService,
    private store: Store<SearchFeatureState>) { }

  SearchCourseState$;

  ngOnInit() {
    this.SearchCourseState$=this.store.select('searchDataState')
                                    .map(state=>state.courses)
                                    .skip(1);

  }
  ngOnDestroy(): void {
    this.store.dispatch(new ResetSearchUiAction());
  }

}
