import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  private readonly httpClient = inject(HttpClient)

  getCourses() : Observable<any> {
    return this.httpClient.get<any>('/api/courses')
  }
}
