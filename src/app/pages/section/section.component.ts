import { Component, OnInit } from '@angular/core';

import { AddSectionDialogComponent } from '../../shared/components/add-section-dialog/add-section-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { SectionService } from '../../shared/services/section/section.service';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {

  constructor(private sectionService:SectionService,
              public dialog:MatDialog) { }
      
  section={
    sectionName:'',
    sectionCode:''
  };
  sections;
  ngOnInit() {
    
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
    console.log(dialogRef);
    dialogRef.afterClosed().subscribe((section)=>{
      //console.log(section + ' added');
      this.sectionService.addSection(section);
    });
  }
}
