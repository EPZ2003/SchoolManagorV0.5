import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Courses } from './models/Courses.dto';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  private readonly httpClient = inject(HttpClient)

  getCourses() : Observable<Courses[]> {
    return this.httpClient.get<Courses[]>('/api/courses')
  }

  createCourse(course:Courses) : Observable<any> {
    return this.httpClient.post<Courses>('api/course',course)
  }

  updateCourse(id:number,column:any,value:any) : Observable<any> {
    return this.httpClient.put<Courses>('api/course',{id,column,value})
  }
  deleteCourse(id:number) : Observable<any> {
    return this.httpClient.delete<Courses>('api/course',{body: { id }} ) 
  }
}
