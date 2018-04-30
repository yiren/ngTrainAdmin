import * as _ from 'lodash';

import { Component, Inject, Input, OnInit, ViewChild } from '@angular/core';

import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Course } from '../../../course/store/course.states';
import { DataStateChangeEvent } from '@progress/kendo-angular-grid';
import { GridComponent } from '@progress/kendo-angular-grid/dist/es/grid.component';
import { GridDataResult } from '@progress/kendo-angular-grid/dist/es/data/data.collection';
import { Observable } from 'rxjs/Observable';
import { PageChangeEvent } from '@progress/kendo-angular-grid/dist/es/data/change-event-args.interface';
import { SearchDataState } from '../../store/search.states';
import { SortDescriptor } from '@progress/kendo-data-query/dist/es/sort-descriptor';
import { orderBy } from '@progress/kendo-data-query/dist/es/array.operators';

@Component({
  selector: 'app-course-search-result',
  templateUrl: './course-search-result.component.html',
  styleUrls: ['./course-search-result.component.scss']
})
export class CourseSearchResultComponent implements OnInit, AfterViewInit {
  

  constructor() { }

  @ViewChild(GridComponent) grid :GridComponent

  @Input()
  data:Observable<Course[]>;
  record:Course[];
  searchGrid:GridDataResult;
  public multiple = false;
  public allowUnsort = true;
  public sort : SortDescriptor[]= [
    {
    field: 'courseStartDate',
    dir: 'desc'
    },
    {
      field: 'courseEndDate',
      dir: 'desc'
    },
  ];
  pageSize=15;
  skip=0;
  ngOnInit() {
    this.data.subscribe((res)=>{
      this.record=_.cloneDeep(res);
      console.log(this.record);
      this.loadData();
      //console.log(this.searchGrid);
    });
    
  }
  public dataStateChange({ skip, take, sort }: DataStateChangeEvent):void{
    
  }
  public pageChange(event:PageChangeEvent){
    this.skip=event.skip;
    this.loadData();
  }
  ngAfterViewInit():void{
    for(let i=0;i<this.pageSize;i++){
      this.grid.expandRow(i);
    }
    //this.grid.expandRow(0);
  }
  private loadData(){
    this.searchGrid={
      data:orderBy(this.record.slice(this.skip,this.skip+this.pageSize), this.sort),
      total:this.record.length
    }
  }
}
