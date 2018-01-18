import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ReportService {
    constructor(private httpClient: HttpClient) { }
    
    averageTrainHourBehaviorSubject=new BehaviorSubject(0);

    API_ENDPOINT='/api/reportdata';
    getAverageTrainHours(datesForSearch){
        return this.httpClient.post(`${this.API_ENDPOINT}/getaveragetrainhours`,datesForSearch);
    }
}