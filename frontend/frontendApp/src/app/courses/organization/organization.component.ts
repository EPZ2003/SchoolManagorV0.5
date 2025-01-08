import { Component, inject } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular'; // Angular Data Grid Component
import type { ColDef } from 'ag-grid-community';
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community'; 
import { ApiServiceService } from '../../api-service.service';
import { Courses } from '../../models/Courses.dto';
import { RouterOutlet } from '@angular/router';

// Register all Community features
ModuleRegistry.registerModules([AllCommunityModule]);
@Component({
  selector: 'app-organization',
  imports: [AgGridAngular,RouterOutlet],
  templateUrl: './organization.component.html',
  styleUrl: './organization.component.css'
})
export class OrganizationComponent {
  //Injection with the service that comunicates with the backend
  private readonly apiService:ApiServiceService = inject(ApiServiceService);

  //Creation of 3 rowData for 3 differents tables with the same colDefs
  rowDataModA:Courses[] = [];
  rowDataModB:Courses[] = [];
  rowDataModC:Courses[] = [];
  // Column Definitions: Defines the columns to be displayed.
  colDefs: ColDef[] = [
      { field: "course", flex: 1},
      { field: "module", flex: 1},
  ];

  ngOnInit(){
      this.loadData()
    }

  loadData(): void {
    this.apiService.getCourses().subscribe({
      next: data => {
        //Using filter for each table and choose the good module for each one (ex: ) 
        this.rowDataModA = data.filter(item => item.module =="algebra"); 
        this.rowDataModB = data.filter(item => item.module =="science");
        //this.rowDataModC = data.filter(item => item.module =="physics"); 
        this.rowDataModC = data; 
      },
      error: err => console.error('Error fetching courses:', err)
    });
  }

}
