import { Component, inject } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular'; // Angular Data Grid Component
import type { ColDef } from 'ag-grid-community';
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community'; 
import { ApiServiceService } from '../../api-service.service';
import { Courses } from '../../models/Courses.dto';

// Register all Community features
ModuleRegistry.registerModules([AllCommunityModule]);
@Component({
  selector: 'app-organization',
  imports: [AgGridAngular],
  templateUrl: './organization.component.html',
  styleUrl: './organization.component.css'
})
export class OrganizationComponent {
  private readonly apiService:ApiServiceService = inject(ApiServiceService);
  rowData = [];

  
  // Column Definitions: Defines the columns to be displayed.
  colDefs: ColDef[] = [
      { field: "course" },
      { field: "module" },
  ];

  ngOnInit(){
      this.loadData()
     }

  loadData(): void {
    this.apiService.getCourses().subscribe({
      next: data => {
        console.log(data);
        this.rowData = data; // Assign data to a variable for rendering in the template
      },
      error: err => console.error('Error fetching courses:', err)
    });
  }

}
