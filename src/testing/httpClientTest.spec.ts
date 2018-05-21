import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { Section } from '../app/pages/section/store/section.states';
import { TestBed } from '@angular/core/testing';

export const END_POINT='/section';

describe('HttpClient testing', ()=>{
    let httpClient:HttpClient;
    let httpTestingController:HttpTestingController;

    const sections:Section[]=[
        {
            sectionId:1,
            sectionCode:'A',
            sectionName:'策劃組',
            students:[]
        },
        {
            sectionId:2,
            sectionCode:'B',
            sectionName:'PE II',
            students:[]
        },
        {
            sectionId:3,
            sectionCode:'C',
            sectionName:'土木組',
            students:[]
        }
    ]

    beforeEach(()=>{
        TestBed.configureTestingModule({
            imports:[HttpClientTestingModule]
        });

        httpClient=TestBed.get(HttpClient);
        httpTestingController=TestBed.get(HttpTestingController);
    });


    it('#Get List of StudentsBySection', ()=>{
        httpClient.get<Section[]>(END_POINT)
            .subscribe(data=>{
                expect(data).toEqual(sections);
            });
        
        const req = httpTestingController.expectOne(END_POINT);
        expect(req.request.method).toEqual('GET');

        req.flush(sections);

        httpTestingController.verify();

    });

    it('#Mock Network Error', ()=>{
        const msg='Network error';
        httpClient.get<Section>(END_POINT)
            .subscribe(data=>{
                fail('should have failed with the network error');
            },
            (error:HttpErrorResponse)=>{
                console.log(error);
                expect(error.error.message).toEqual(msg,'Message');
            }
        );
        const req=httpTestingController.expectOne(END_POINT);
        const mockError=new ErrorEvent('Network Connection Error', {
            message:msg
        });
        req.error(mockError);
    });




})