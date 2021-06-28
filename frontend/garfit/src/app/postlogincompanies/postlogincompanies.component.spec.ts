import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostlogincompaniesComponent } from './postlogincompanies.component';

describe('PostlogincompaniesComponent', () => {
  let component: PostlogincompaniesComponent;
  let fixture: ComponentFixture<PostlogincompaniesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostlogincompaniesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostlogincompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
