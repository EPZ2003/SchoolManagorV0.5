import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeadlineComponent } from './deadline.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('DeadlineComponent', () => {
  let component: DeadlineComponent;
  let fixture: ComponentFixture<DeadlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      
      providers: [
        //Router Link TODO
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
