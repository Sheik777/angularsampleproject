import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SheikComponent } from './sheik/sheik.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PipesComponent } from './pipes/pipes.component';
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
@NgModule({
  declarations: [
    AppComponent,
    SheikComponent, 
    RegisterComponent,
    LoginComponent,
    DashboardComponent,
    AboutComponent,
    PageNotFoundComponent,
    PipesComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [FormComponent]
})
export class AppModule { }
