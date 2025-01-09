import { TestBed } from '@angular/core/testing';

import { ApiServiceService } from './api-service.service';
import { HttpClient } from '@angular/common/http';

describe('ApiServiceService', () => {
  let service: ApiServiceService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
