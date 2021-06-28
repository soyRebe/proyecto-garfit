import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormcompaniesComponent } from './formcompanies.component';

describe('FormcompaniesComponent', () => {
  let component: FormcompaniesComponent;
  let fixture: ComponentFixture<FormcompaniesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormcompaniesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormcompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
