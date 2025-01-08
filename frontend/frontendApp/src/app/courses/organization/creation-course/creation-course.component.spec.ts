import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationCourseComponent } from './creation-course.component';

describe('CreationCourseComponent', () => {
  let component: CreationCourseComponent;
  let fixture: ComponentFixture<CreationCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
