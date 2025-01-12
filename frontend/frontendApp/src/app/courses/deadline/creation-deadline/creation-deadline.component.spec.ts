import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationDeadlineComponent } from './creation-deadline.component';

describe('CreationDeadlineComponent', () => {
  let component: CreationDeadlineComponent;
  let fixture: ComponentFixture<CreationDeadlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
