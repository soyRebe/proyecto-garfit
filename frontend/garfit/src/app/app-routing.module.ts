import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication.component';
import { HeaderComponent } from './header/header.component';
import { PrelogincompaniesComponent } from './prelogincompanies/prelogincompanies.component';
import { FormcompaniesComponent } from './formcompanies/formcompanies.component';
import { PostlogincompaniesComponent } from './postlogincompanies/postlogincompanies.component';


const routes: Routes = [
  { path: 'authentication', component: AuthenticationComponent},
  { path: 'formcompanies', component: FormcompaniesComponent},
  { path: 'subscription', component: PrelogincompaniesComponent},
  { path: 'welcome', component: PostlogincompaniesComponent},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
