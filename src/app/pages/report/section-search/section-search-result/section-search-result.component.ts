import * as _ from 'lodash';

import { Component, Input, OnInit, ViewChild } from '@angular/core';

import { DataStateChangeEvent } from '@progress/kendo-angular-grid';
import { GridComponent } from '@progress/kendo-angular-grid/dist/es/grid.component';
import { GridDataResult } from '@progress/kendo-angular-grid/dist/es/data/data.collection';
import { Observable } from 'rxjs/Observable';
import { PageChangeEvent } from '@progress/kendo-angular-grid/dist/es/data/change-event-args.interface';
import { SortDescriptor } from '@progress/kendo-data-query/dist/es/sort-descriptor';
import { orderBy } from '@progress/kendo-data-query/dist/es/array.operators';

@Component({
  selector: 'app-section-search-result',
  templateUrl: './section-search-result.component.html',
  styleUrls: ['./section-search-result.component.scss']
})
export class SectionSearchResultComponent implements OnInit {

  constructor() { }
  @ViewChild(GridComponent) grid :GridComponent

  @Input()
  data:Observable<any[]>;;
  record:any[];
  sectionGrid:GridDataResult;
  public multiple = false;
  public allowUnsort = true;
  public sort : SortDescriptor[]= [{
    field: 'sectionName',
    dir: 'asc'
  },
  {
    field: 'studentName',
    dir: 'asc'
  },
  {
    field: 'courseStartDate',
    dir: 'desc'
  },
  {
    field: 'courseEndDate',
    dir: 'desc'
  }
];
  pageSize=50;
  skip=0;
  ngOnInit() {
    this.data.subscribe((res:any[])=>{
      console.log(res);
      this.record=_.cloneDeep(res);
      this.loadData();
    });
  }
  public dataStateChange({ skip, take, sort }: DataStateChangeEvent):void{
    
  }
  public pageChange(event:PageChangeEvent){
    this.skip=event.skip;
    this.loadData();
  }
  
  private loadData(){
    this.sectionGrid={
      data:orderBy(this.record.slice(this.skip,this.skip+this.pageSize), this.sort),
      total:this.record.length
    }
  }
}
