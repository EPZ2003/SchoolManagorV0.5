import { Component, inject } from '@angular/core';
import { ApiServiceService } from '../../../api-service.service';
import { Courses } from '../../../models/Courses.dto';
import { JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DeadlineComponent } from '../deadline.component';

@Component({
  selector: 'app-creation-deadline',
  imports: [FormsModule],
  templateUrl: './creation-deadline.component.html',
  styleUrl: './creation-deadline.component.css'
})
export class CreationDeadlineComponent {
  private readonly apiService: ApiServiceService = inject(ApiServiceService);
    
    course:Courses = {
      id: -1,
      course:'',
      module:'',
      tdSubmission:'',
      nextExam:'',
      project:'',
    }
  
    //Calling the post method with the filled course
    createCourse() {
      
      this.apiService.createCourse(this.courseDateFormat(this.course)).subscribe({
        next:() => console.log("OK"),
        error: error => console.log("WRONG")
      })
    }

    courseDateFormat(course:Courses):Courses {
      let formatedCourse:Courses = course
      //For TdSubmission
      if (formatedCourse.tdSubmission != null ) {
        formatedCourse.tdSubmission = (new Date(formatedCourse.tdSubmission)).toISOString()
      }else {
        formatedCourse.tdSubmission = null
      }
      //for nextExam
      if (formatedCourse.nextExam != null ) {
        formatedCourse.nextExam = (new Date(formatedCourse.nextExam)).toISOString()
      }else {
        formatedCourse.nextExam = null
      }
      //for project
      if (formatedCourse.project != null ) {
        formatedCourse.project = (new Date(formatedCourse.project)).toISOString()
      }else {
        formatedCourse.project = null
      }

      return formatedCourse
    }
}
