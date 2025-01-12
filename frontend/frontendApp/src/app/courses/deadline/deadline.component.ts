import { Component, inject, OnInit } from '@angular/core';
import { ApiServiceService } from '../../api-service.service';
import { AgGridAngular } from 'ag-grid-angular';
import { Courses } from '../../models/Courses.dto';

//Ag-grid imports
import type { ColDef } from 'ag-grid-community';
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community'; 
import { format } from 'path';


// Register all Community features
ModuleRegistry.registerModules([AllCommunityModule]);
@Component({
  selector: 'app-deadline',
  imports: [AgGridAngular],
  templateUrl: './deadline.component.html',
  styleUrl: './deadline.component.css'
})
export class DeadlineComponent implements OnInit{
  
  private readonly apiService: ApiServiceService = inject(ApiServiceService);

  rowData:Courses[] = []
  
  colDefs:ColDef[] = [
    {field:"course"},
    {field:"module"},

    {headerName: "TdSubmission",
      field:"tdSubmission",
      editable:true
    
    },

    {field:"nextExam"},
    {field:"project"},

  ]
  


  ngOnInit(): void {
    this.loadData()
  }

  loadData(){
    this.apiService.getCourses().subscribe({
    next: data => this.rowData = data.map( item => {
      return{
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

}
