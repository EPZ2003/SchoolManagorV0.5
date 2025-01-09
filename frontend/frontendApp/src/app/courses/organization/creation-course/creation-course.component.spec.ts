import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationCourseComponent } from './creation-course.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('CreationCourseComponent', () => {
  let component: CreationCourseComponent;
  let fixture: ComponentFixture<CreationCourseComponent>;
//Work to do Because this Creation-Course component use HttpClient modules by using apiService service
/**
 * There is the the link for more details : https://angular.dev/guide/http/testing
 */
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers : [
        //This is for HttpClient Module
        provideHttpClient(),
        provideHttpClientTesting()
      ],
      imports: [CreationCourseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreationCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
