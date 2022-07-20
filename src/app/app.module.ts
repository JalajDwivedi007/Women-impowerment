import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { MainBodyComponent } from './main-body/main-body.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
<<<<<<< HEAD
import { GuidelinesComponent } from './guidelines/guidelines.component';
=======
import { CriteriaComponent } from './criteria/criteria.component';
import { PoliciesLegislationsComponent } from './policies-legislations/policies-legislations.component';
>>>>>>> frontend

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    MainFooterComponent,
    MainBodyComponent,
    NavbarComponent,
    SignUpComponent,
    LoginComponent,
    MainComponent,
<<<<<<< HEAD
    GuidelinesComponent
=======
    CriteriaComponent,
    PoliciesLegislationsComponent
>>>>>>> frontend
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
