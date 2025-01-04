import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-courses',
  imports: [RouterOutlet],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {
  private readonly apiservice:ApiServiceService = inject(ApiServiceService);

  ngOnInit() {
    this.apiservice.getCourses().subscribe({
      next : data => console.log(data)
    })
  }
}
