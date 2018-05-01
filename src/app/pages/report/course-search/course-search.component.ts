import { Component, OnDestroy, OnInit } from '@angular/core';
import { SearchDataState, SearchFeatureState } from '../store/search.states';

import { CourseService } from '../../../shared/services/course/course.service';
import { Observable } from 'rxjs/Observable';
import { ResetSearchUiAction } from '../store/search.actions';
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

  SearchDataState$:Observable<SearchDataState>;

  ngOnInit() {
    this.SearchDataState$=this.store.select('searchDataState')
                                    .skip(1);

  }
  ngOnDestroy(): void {
    this.store.dispatch(new ResetSearchUiAction());
  }

}
