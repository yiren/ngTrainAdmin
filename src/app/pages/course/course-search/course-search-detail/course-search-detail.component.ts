import { Component, Input, OnInit } from '@angular/core';

import { GridDataResult } from '@progress/kendo-angular-grid/dist/es/data/data.collection';
import { SortDescriptor } from '@progress/kendo-data-query/dist/es/sort-descriptor';
import { orderBy } from '@progress/kendo-data-query/dist/es/array.operators';

@Component({
  selector: 'app-course-search-detail',
  templateUrl: './course-search-detail.component.html',
  styleUrls: ['./course-search-detail.component.scss']
})
export class CourseSearchDetailComponent implements OnInit {

  constructor() {
    
   }

  @Input()
  course:any[];
  
  gridView: GridDataResult;
  
  public multiple = false;
  public allowUnsort = true;
  public sort : SortDescriptor[]= [{
    field: 'studentName',
    dir: 'asc'
  }];
  ngOnInit() {
    this.loadData();
    console.log(this.gridView);
  }
  public sortChange(sort): void {
    
    this.sort = sort;
    this.loadData();
  }
  private loadData(){
    this.gridView={
      data:orderBy(this.course, this.sort),
      total:this.course.length
    }
  }
  
}
