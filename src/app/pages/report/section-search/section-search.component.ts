import { Component, OnDestroy, OnInit } from '@angular/core';

import { CourseService } from '../../../shared/services/course/course.service';
import { Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ReportService } from '../../../shared/services/report/report.service';

@Component({
  selector: 'app-section-search',
  templateUrl: './section-search.component.html',
  styleUrls: ['./section-search.component.scss']
})
export class SectionSearchComponent implements OnInit, OnDestroy{
  

  constructor(private reportService:ReportService,
              private courseService:CourseService) { }

  sectionSearch$;
  

  ngOnInit() {
    this.sectionSearch$=this.courseService.courseSearchSubject;
    
  }
  ngOnDestroy(): void {
    this.courseService.courseSearchSubject.next([]);
  }

}
