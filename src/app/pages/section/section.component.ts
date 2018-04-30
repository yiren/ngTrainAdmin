import * as fromApp from '../../store/app.states';

import { Component, OnInit } from '@angular/core';
import { SectionFeatureState, SectionState } from './store/section.states';

import { AddSectionDialogComponent } from '../../shared/components/add-section-dialog/add-section-dialog.component';
import { GetAllSections } from './store/section.actions';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs/Observable';
import { SectionService } from '../../shared/services/section/section.service';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {

  constructor(private sectionService:SectionService,
              private store:Store<fromApp.AppState>,
              public dialog:MatDialog) { }
      
  
  sectionDataState$:Observable<SectionState>;
  ngOnInit() {
    this.store.dispatch(new GetAllSections());
    this.sectionDataState$=this.store.select('section');
    // this.sectionService.sectionSubject
    //     .subscribe(data=>{
    //       //console.log(data);
    //       this.sections=data;
    //     });
    // this.sectionService.getSectionList();
  }

  updateSection(section){
    this.sectionService.updateSection(section);
  }

  deleteSection(sectionId){
    this.sectionService.deleteSection(sectionId);
  }

  OnAddSectionDialog(){
    // let dialogRef=this.dialog.open(AddSectionDialogComponent,{
    //   data:{
    //     section:this.section
    //   }
    // });
    // console.log(dialogRef);
    // dialogRef.afterClosed().subscribe((section)=>{
    //   //console.log(section + ' added');
    //   this.sectionService.addSection(section);
    // });
  }
}
