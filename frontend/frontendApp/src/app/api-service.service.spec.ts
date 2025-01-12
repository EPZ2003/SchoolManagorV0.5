import { TestBed } from '@angular/core/testing';

import { ApiServiceService } from './api-service.service';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';


//Work to do Because this Service use HttpClient modules 
/**
 * There is the the link for more details : https://angular.dev/guide/http/testing
 */
describe('ApiServiceService', () => {
  let service: ApiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        //This is for HttpClient Module 
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });
    //Creation of a testing backend
    const HttpTesting = TestBed.inject(HttpTestingController)
    service = TestBed.inject(ApiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
