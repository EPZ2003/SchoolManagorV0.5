import { Component, inject } from '@angular/core';
import { ApiServiceService } from '../../../api-service.service';
import { Courses } from '../../../models/Courses.dto';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
@Component({
  selector: 'app-creation-course',
  imports: [FormsModule,JsonPipe],
  templateUrl: './creation-course.component.html',
  styleUrl: './creation-course.component.css'
})
export class CreationCourseComponent {
  private readonly apiService: ApiServiceService = inject(ApiServiceService);
  
  course:Courses = {
    course:'',
    module:'',
    tdSubmission:null,
    nextExam:null,
    project:null,
  }

  //Calling the post method with the filled course
  createCourse() {
    this.apiService.createCourse(this.course).subscribe({
      next:() => console.log("OK"),
      error: error => console.log("WRONG")
    })
  }
}
