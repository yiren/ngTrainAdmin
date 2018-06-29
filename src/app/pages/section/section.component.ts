import { Component, OnInit } from '@angular/core';
import { Selector, Store } from '@ngxs/store';

import { AddSectionDialogComponent } from '../../shared/components/add-section-dialog/add-section-dialog.component';
import { LoadSections } from '../../ngxs/sections/section.actions';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs/Observable';
import { Section } from '../../ngxs/sections/section.model';
import { SectionService } from '../../shared/services/section/section.service';
import { SectionState } from '../../ngxs/sections/section.state';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {



  @Selector(SectionState.getSections) 
  sections$:Observable<Section[]>;

  sections;

  constructor(private sectionService:SectionService,
              private store:Store,
              public dialog:MatDialog) { }
      
  section={
    sectionName:'',
    sectionCode:''
  };

  
  ngOnInit() {
    this.store.dispatch(new LoadSections());
    this.sections$.subscribe(console.log);
    this.sectionService.sectionSubject
        .subscribe(data=>{
          //console.log(data);
          this.sections=data;
        });
    this.sectionService.getSectionList();
  }

  updateSection(section){
    this.sectionService.updateSection(section);
  }

  deleteSection(sectionId){
    this.sectionService.deleteSection(sectionId);
  }

  OnAddSectionDialog(){
    let dialogRef=this.dialog.open(AddSectionDialogComponent,{
      data:{
        section:this.section
      }
    });
    //console.log(dialogRef);
    dialogRef.afterClosed().subscribe((section)=>{
      //console.log(section + ' added');
      this.sectionService.addSection(section);
    });
  }
}
