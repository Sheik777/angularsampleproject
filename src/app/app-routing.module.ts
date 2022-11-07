import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormComponent } from './form/form.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PipesComponent } from './pipes/pipes.component';
import { RegisterComponent } from './register/register.component';
import { SheikComponent } from './sheik/sheik.component';

const routes: Routes = [

  { path:'', redirectTo:'home',pathMatch:'full' },

  { path: "home", component: AboutComponent },

  { path: "service",  component: RegisterComponent },

  { path: "book", component:FormComponent},

  { path: "contact",  component: SheikComponent },

  { path: "**",  component: PageNotFoundComponent  },
   
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
