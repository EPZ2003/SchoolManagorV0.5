import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeadlineComponent } from './deadline.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('DeadlineComponent', () => {
  let component: DeadlineComponent;
  let fixture: ComponentFixture<DeadlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      
      providers: [
        //Providers for the Router Link 
                {
                  provide : ActivatedRoute,
                  useValue : {
                    // Mock static parameters
                    snapshot: {params : {id: '123'} },
                    // Mock observable query params
                    queryParams: of( {query : 'test'})
                  }
                },
        //This is for HttpClient
        provideHttpClient(),
        provideHttpClientTesting()
      ],
      imports: [DeadlineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeadlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
