import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { CourseComponent } from './course/course.component';
import { PlacementComponent } from './placement/placement.component';
import { RegisterComponent } from './register/register.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { WildCardComponent } from './wild-card/wild-card.component';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { MeanStackComponent } from './mean-stack/mean-stack.component';
import { MernStackComponent } from './mern-stack/mern-stack.component';
import { AwsCourseComponent } from './aws-course/aws-course.component';
import { CyberSecurityComponent } from './cyber-security/cyber-security.component';
import { FooterComponent } from './footer/footer.component';
import { DatabaseOperationsService } from './database-operations.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CourseComponent,
    PlacementComponent,
    RegisterComponent,
    AboutUsComponent,
    ContactUsComponent,
    WildCardComponent,
    NavbarComponent,
    MeanStackComponent,
    MernStackComponent,
    AwsCourseComponent,
    CyberSecurityComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
   FormsModule,
   ReactiveFormsModule,
   HttpClientModule
  ],
  providers: [DatabaseOperationsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
