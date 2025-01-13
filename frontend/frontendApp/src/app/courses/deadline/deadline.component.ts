import { Component, inject, OnInit } from '@angular/core';
import { ApiServiceService } from '../../api-service.service';
import { AgGridAngular } from 'ag-grid-angular';
import { Courses } from '../../models/Courses.dto';

//Ag-grid imports
import type { ColDef, GetRowIdParams, GridApi, GridOptions } from 'ag-grid-community';
import { AllCommunityModule, colorSchemeDarkBlue, ModuleRegistry, themeQuartz } from 'ag-grid-community'; 
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
  //Importing pre-built ag-grid themes 
  theme1 = themeQuartz.withPart(colorSchemeDarkBlue)
  
  //For the toogleButton
  toAdd:string = "creation";
  addButton:string = "ADD";


  rowData:Courses[] = []
  
  colDefs:ColDef[] = [
    {field:"course",flex:1},
    {field:"module",flex:1},
    {
      field:"tdSubmission",
      editable:true,
      enableCellChangeFlash:true,
      flex:1
    },
    {
      field:"nextExam",
      editable:true,
      enableCellChangeFlash:true,
      flex:1
    },
    {
      field:"project",
      editable:true,
      enableCellChangeFlash:true,
      flex:1
    },
  ]
  
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
      }//Filter To choose only modules courses
    }).filter( 
      item => ( 
        item.module ==="Standard Track" || 
        item.module ==="CCC" ||
        item.module ==="Computer Science")),
    error: err => console.error('Deadline Component',err)
    })
  }

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

  //Toggle the string that enable or back the initial subpages 
  toggleCreation() {
    switch (this.addButton) {
      case "ADD":
        this.addButton = "CANCEL";
        this.toAdd = "./"
        break;
      case "CANCEL":
        this.addButton = "ADD";
        this.toAdd = "creation"
        break;
      default:
        break;
      }
    }
}
