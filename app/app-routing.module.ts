import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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



const routes: Routes = [
  { path: 'details', component: DetailsComponent },
  { path: 'form', component: FormComponent },
  { path: '', component: WelcomeComponent,pathMatch:'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'success', component: SuccessComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'reject', component: RejectComponent },
  { path: 'admindash', component: AdmindashComponent },
  { path: 'approved', component: ApprovedComponent },
  { path: 'employee', component: EmployeeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'empabout', component: EmpaboutComponent },
  { path: 'procedure', component: ProcedureComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'hcontact', component: HcontactComponent },
  { path: 'viewemp', component: ViewempComponent },
  { path: 'addemp', component: AddempComponent },
  { path: 'editemp/update/:dataid', component: EditempComponent },
  { path: 'profile', component: ProfileComponent }

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
