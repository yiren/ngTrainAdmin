import { Component, Input, OnInit } from '@angular/core';

import { Course } from '../../../../shared/model/Course';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-student-search-result',
  templateUrl: './student-search-result.component.html',
  styleUrls: ['./student-search-result.component.scss']
})
export class StudentSearchResultComponent implements OnInit {


  @Input()
  data:Observable<Course[]>;

  constructor() { }

  ngOnInit() {
    this.data.subscribe((res:Course[])=>{
      
    })
  }

}
