import { HttpClient, HttpParams } from '@angular/common/http';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Course } from '../../model/Course';
import { CourseSearch } from '../../model/CourseSearch';
import { CourseService } from '../course/course.service';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ReportService {
    constructor(private httpClient: HttpClient,
                private courseService:CourseService) { }
    API_ENDPOINT='/api/searchdata';
    averageTrainHourBehaviorSubject=new BehaviorSubject(0);
    courseExportSubject=new BehaviorSubject([]);
    searchCourse(searchVM){
        //console.log(searchVM);
        let searchParams=new HttpParams();
        Object.keys(searchVM).forEach(key =>{
            searchParams = searchParams.append(key, searchVM[key]);
       });
        this.httpClient.get(`${this.API_ENDPOINT}/searchbycourse`,{
                            
                            observe:'body',
                            params:searchVM
                        })
                        //.do(console.log)
                        .subscribe((courses:Course[])=>{
                            //console.log(courses);
                            this.courseService.courseSearchSubject.next(courses);
                        });
        this.httpClient.get(`${this.API_ENDPOINT}/searchbysection`,{params:searchVM})
        .subscribe((data:any[])=>{
            //console.log("export data",data)
            this.courseExportSubject.next(data);
        })
    }
    
    searchCourseByStudent(studentSearchVM){
        this.courseService.lastStudentSearchValueSubject.next(studentSearchVM);
        this.httpClient.get(`${this.API_ENDPOINT}/searchbystudent`,{params:studentSearchVM})
                        .subscribe((courses:Course[])=>{
                            this.courseService.studentSearchSubject.next(courses);
                            
                        });
    }
    
    searchCourseBySection(sectionSearchVM){
        this.httpClient.get(`${this.API_ENDPOINT}/searchbysection`,{params:sectionSearchVM})
                       .subscribe((data:any[])=>{
                           this.courseService.courseSearchSubject.next(data);
                       })
    }

    getAverageTrainHours(datesForSearch){
        return this.httpClient.post(`${this.API_ENDPOINT}/getaveragetrainhours`,datesForSearch);
    }
}