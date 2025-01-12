import { Component, inject, OnInit } from '@angular/core';
import { ApiServiceService } from '../../api-service.service';
import { AgGridAngular } from 'ag-grid-angular';
import { Courses } from '../../models/Courses.dto';

//Ag-grid imports
import type { ColDef, GetRowIdParams, GridApi, GridOptions } from 'ag-grid-community';
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community'; 
import { RouterLink, RouterOutlet } from '@angular/router';


// Register all Community features
ModuleRegistry.registerModules([AllCommunityModule]);
@Component({
  selector: 'app-deadline',
  imports: [AgGridAngular,RouterOutlet,RouterLink],
  templateUrl: './deadline.component.html',
  styleUrl: './deadline.component.css'
})
export class DeadlineComponent implements OnInit{
  
  private readonly apiService: ApiServiceService = inject(ApiServiceService);

  rowData:Courses[] = []
  
  colDefs:ColDef[] = [
    {field:"course"},
    {field:"module"},
    {
      field:"tdSubmission",
      editable:true,
      enableCellChangeFlash:true,
    },
    {
      field:"nextExam",
      editable:true,
      enableCellChangeFlash:true,
    },
    {
      field:"project",
      editable:true,
      enableCellChangeFlash:true,
    },
  ]
  
  //When the enter key is pressed then we call the backend to update the row 
  onCellKeyDown(event: any) : void{
    if (event.event.key === "Enter") {
      //take the naviguator
      const row = event.data
      const column = event.colDef.field
      
      //Convert to Date format
      const unformatedCell = row[column]
      const formatedCell = this.toISOFormat(unformatedCell).toISOString()

      //Update the choosen cells after press Enter
      this.apiService.updateCourse(row.id,column,formatedCell).subscribe({
        next: () => console.log("ok"),
        error: err => console.error('Error at the deadline Component',err)
      })
    }
  }

  ngOnInit(): void {
    this.loadData()    
  }

  loadData(){
    this.apiService.getCourses().subscribe({
    next: data => this.rowData = data.map( item => {
      return{
        id:item.id,
        course:item.course,
        module:item.module,
        tdSubmission:this.dateToString(item.tdSubmission),
        nextExam:this.dateToString(item.nextExam),
        project:this.dateToString(item.project)
      }
    }),
    error: err => console.error('Deadline Component',err)
    })
  }


  //this transform inputs Sequelize.DATE types into DD-MM-YY format
  dateToString(unformattedDate: string | null): string | null {
    if (unformattedDate == null) {
      return "none";
    } else {
      const date = new Date(unformattedDate);

      // Extract the day, month, and year in UTC
      const day = date.getUTCDate().toString().padStart(2, '0'); // Ensures 2-digit day
      const month = (date.getUTCMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
      const year = date.getUTCFullYear().toString().slice(-2); // Extract last two digits of the year
  
      // Format to DD-MM-YY
      return `${day}-${month}-${year}`;
    }
  }

  //Conver DD-MM-YY format to ISO format
  toISOFormat(date:string): Date {
    const dateSplited = date.split('-');
    //Convert into this the ISO format and add 20 to have a full year number
    const formatedString = "20"+dateSplited[2]+"-"+dateSplited[1]+"-"+dateSplited[0]
    return new Date(formatedString)
  }
}
