import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger'; // Import the logger modules

import { DetailsComponent } from './details/details.component';
import { FormComponent } from './form/form.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RegisterComponent } from './register/register.component';
import { SuccessComponent } from './success/success.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdmindashComponent } from './admindash/admindash.component';
import { EmployeeComponent } from './employee/employee.component';
import { RejectComponent } from './reject/reject.component';
import { ApprovedComponent } from './approved/approved.component';
import { AboutComponent } from './about/about.component';
import { EmpaboutComponent } from './empabout/empabout.component';
import { ProcedureComponent } from './procedure/procedure.component';
import { ContactComponent } from './contact/contact.component';
import { HcontactComponent } from './hcontact/hcontact.component';
import { ViewempComponent } from './viewemp/viewemp.component';
import { AddempComponent } from './addemp/addemp.component';
import { EditempComponent } from './editemp/editemp.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    FormComponent,
    WelcomeComponent,
    RegisterComponent,
    SuccessComponent,
    DashboardComponent,
    AdmindashComponent,
    EmployeeComponent,
    RejectComponent,
    ApprovedComponent,
    AboutComponent,
    EmpaboutComponent,
    ProcedureComponent,
    ContactComponent,
    HcontactComponent,
    ViewempComponent,
    AddempComponent,
    EditempComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    LoggerModule.forRoot({
      level: NgxLoggerLevel.DEBUG, // Set your desired logging level
      serverLogLevel: NgxLoggerLevel.ERROR, // Set the level to log on the server (if applicable)
      disableConsoleLogging: false, // Set to true to disable console logging
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
