import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationDeadlineComponent } from './creation-deadline.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('CreationDeadlineComponent', () => {
  let component: CreationDeadlineComponent;
  let fixture: ComponentFixture<CreationDeadlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        //This is for HttpClient 
        provideHttpClient(),
        provideHttpClientTesting()
      ],
      imports: [CreationDeadlineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreationDeadlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
