import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-courses',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {

}
