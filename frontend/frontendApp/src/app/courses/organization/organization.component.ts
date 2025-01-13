import { Component, inject } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular'; // Angular Data Grid Component
import type { ColDef } from 'ag-grid-community';
import { AllCommunityModule, colorSchemeDarkBlue, ModuleRegistry, themeQuartz } from 'ag-grid-community'; 
import { ApiServiceService } from '../../api-service.service';
import { Courses } from '../../models/Courses.dto';
import { RouterLink, RouterOutlet } from '@angular/router';

// Register all Community features
ModuleRegistry.registerModules([AllCommunityModule]);
@Component({
  selector: 'app-organization',
  imports: [AgGridAngular,RouterOutlet,RouterLink],
  templateUrl: './organization.component.html',
  styleUrl: './organization.component.css'
})
export class OrganizationComponent {
  //Importing pre-built ag-grid themes 
  theme1 = themeQuartz.withPart(colorSchemeDarkBlue)
  //Injection with the service that comunicates with the backend
  private readonly apiService:ApiServiceService = inject(ApiServiceService);

  //For the toogleButton
  toAdd:string = "creation";
  addButton:string = "ADD";

  //Creation of 3 rowData for 3 differents tables with the same colDefs
  rowDataModA:Courses[] = [];
  rowDataModB:Courses[] = [];
  rowDataModC:Courses[] = [];
  // Column Definitions: Defines the columns to be displayed.
  colDefs: ColDef[] = [
      { field: "course", flex: 1,cellStyle:{fontSize : '20px'}},
      { field: "module", flex: 1,cellStyle:{fontSize : '20px'}},
  ];

  ngOnInit(){
      this.loadData()
      this.addButton = "ADD"
    }

  loadData(): void {
    this.apiService.getCourses().subscribe({
      next: data => {
        //Using filter for each table and choose the good module for each one (ex: ) 
        this.rowDataModA = data.filter(item => item.module ==="Standard Track"); 
        this.rowDataModB = data.filter(item => item.module ==="CCC");
        this.rowDataModC = data.filter(item => item.module ==="Computer Science"); 
      },
      error: err => console.error('Error fetching courses:', err)
    });
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
