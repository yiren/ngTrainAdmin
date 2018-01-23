import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Course } from '../../model/Course';
import { CourseSearch } from '../../model/CourseSearch';
import { CourseService } from '../course/course.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ReportService {
    constructor(private httpClient: HttpClient,
                private courseService:CourseService) { }
    API_ENDPOINT='/api/searchdata';
    averageTrainHourBehaviorSubject=new BehaviorSubject(0);

    searchCourse(searchVM:CourseSearch){
        this.httpClient.post(`${this.API_ENDPOINT}/searchbycourse`, searchVM)
                        .subscribe((courses:Course[])=>{
                            this.courseService.courseSearchSubject.next(courses);
                        })
    }
    
    searchCourseByStudent(studentSearchVM){
        this.courseService.lastStudentSearchValueSubject.next(studentSearchVM);
        this.httpClient.post(`${this.API_ENDPOINT}/searchbystudent`,studentSearchVM)
                        .subscribe((courses:Course[])=>{
                            this.courseService.courseSearchSubject.next(courses);
                        });
    }
    
    searchCourseBySection(sectionSearchVM){
        this.httpClient.post(`${this.API_ENDPOINT}/searchbysection`,sectionSearchVM)
                       .subscribe((data:any[])=>{
                           this.courseService.courseSearchSubject.next(data);
                       })
    }

    getAverageTrainHours(datesForSearch){
        return this.httpClient.post(`${this.API_ENDPOINT}/getaveragetrainhours`,datesForSearch);
    }
}