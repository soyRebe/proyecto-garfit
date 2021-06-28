import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrelogincompaniesComponent } from './prelogincompanies.component';

describe('PrelogincompaniesComponent', () => {
  let component: PrelogincompaniesComponent;
  let fixture: ComponentFixture<PrelogincompaniesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrelogincompaniesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrelogincompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
