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
import { GuidelinesComponent } from './static-page/guidelines/guidelines.component';
import { CriteriaComponent } from './static-page/criteria/criteria.component';
import { PoliciesLegislationsComponent } from './static-page/policies-legislations/policies-legislations.component';
import { FaqComponent } from './static-page/faq/faq.component';
import { FundingNormsComponent } from './static-page/funding-norms/funding-norms.component';
import { AboutUsComponent } from './static-page/about-us/about-us.component';
import { TrainingComponent } from './training/training.component';
import { TraineeRegisterHomeComponent } from './trainee/trainee-register-home/trainee-register-home.component';
import { TraineeCourseRegComponent } from './trainee/trainee-course-reg/trainee-course-reg.component';
import { TraineeHostelRegComponent } from './trainee/trainee-hostel-reg/trainee-hostel-reg.component';
import { TraineeSukanyaRegComponent } from './trainee/trainee-sukanya-reg/trainee-sukanya-reg.component';

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
    GuidelinesComponent,
    CriteriaComponent,
    PoliciesLegislationsComponent,
    FaqComponent,
    FundingNormsComponent,
    AboutUsComponent,
    TrainingComponent,
    TraineeRegisterHomeComponent,
    TraineeCourseRegComponent,
    TraineeHostelRegComponent,
    TraineeSukanyaRegComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
