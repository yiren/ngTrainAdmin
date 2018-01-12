import { Component, Inject, Input, OnInit, ViewChild } from '@angular/core';

import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { DataStateChangeEvent } from '@progress/kendo-angular-grid';
import { GridComponent } from '@progress/kendo-angular-grid/dist/es/grid.component';

@Component({
  selector: 'app-course-search-result',
  templateUrl: './course-search-result.component.html',
  styleUrls: ['./course-search-result.component.scss']
})
export class CourseSearchResultComponent implements OnInit, AfterViewInit {

  constructor() { }

  @ViewChild(GridComponent) grid :GridComponent

  @Input()
  data;
  pageSize=15;
  ngOnInit() {
    console.log(this.data);
  }
  public dataStateChange({ skip, take, sort }: DataStateChangeEvent):void{

  }

  ngAfterViewInit():void{
    setTimeout(()=>{
      for(let i=0;i<this.pageSize;i++){
        this.grid.expandRow(i);
      }
    },1000)
    
    
    //this.grid.expandRow(0);
  }
}
