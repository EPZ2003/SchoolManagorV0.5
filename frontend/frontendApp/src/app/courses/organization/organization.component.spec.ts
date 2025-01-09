import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationComponent } from './organization.component';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

//Work to do Because this Organization component use HttpClient modules by using apiService service
/**
 * There is the the link for more details : https://angular.dev/guide/http/testing
 */
describe('OrganizationComponent', () => {
  let component: OrganizationComponent;
  let fixture: ComponentFixture<OrganizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers : [
        
        //This i for ActivatedRoute
        {
          provide : ActivatedRoute,
          useValue : {
            // Mock static parameters
            snapshot: {params : {id: '123'} },
            // Mock observable query params
            queryParams: of( {query : 'test'})
          }
        },
        
        //This is for HttpClient Module
        provideHttpClient(),
        provideHttpClientTesting()
      ],
      imports: [
        OrganizationComponent,
      ]
    })
    .compileComponents();
    //Creation of Backend Test
    const HttpTesting = TestBed.inject(HttpTestingController)
    fixture = TestBed.createComponent(OrganizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


