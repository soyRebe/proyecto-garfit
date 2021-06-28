import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { HeaderComponent } from './header/header.component';
import { FormcompaniesComponent } from './formcompanies/formcompanies.component';
import { PrelogincompaniesComponent } from './prelogincompanies/prelogincompanies.component';
import { PostlogincompaniesComponent } from './postlogincompanies/postlogincompanies.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    HeaderComponent,
    FormcompaniesComponent,
    PrelogincompaniesComponent,
    PostlogincompaniesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
