import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class SectionService {

  constructor(private httpClient:HttpClient) { }

  sectionSubject=new BehaviorSubject([]);

  SECTION_API_ENDPOINT='/api/sections'
  
  getSectionList(){
    this.httpClient.get(this.SECTION_API_ENDPOINT)
                   .subscribe((data:any[])=>{
                     this.sectionSubject.next(data);
                   })
  }


  updateSection(section){
    this.httpClient.put(`${this.SECTION_API_ENDPOINT}/${section.sectionId}`,section)
                   .subscribe(data=>{
                     //console.log(data);
                     this.getSectionList();
                   });
  }

  deleteSection(sectionId){
    this.httpClient.delete(`${this.SECTION_API_ENDPOINT}/${sectionId}`)
                   .subscribe(res=>{
                     //console.log(res);
                     this.getSectionList();
                   });
  }

  addSection(section){
    this.httpClient.post(this.SECTION_API_ENDPOINT,section)
        .subscribe(data=>{
          console.log(data);
          this.getSectionList()
        });
  }

}
