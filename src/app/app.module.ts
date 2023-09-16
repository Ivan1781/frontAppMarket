import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginOrRegisterComponent } from './components/login-or-register/login-or-register.component';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main-component/main-component.component';
import { DashboardComponentComponent } from './components/dashboard-component/dashboard-component.component';

const appRoutes: Routes = [
  {path: 'api/auth/register', component: RegistrationComponent },
  {path: 'api/auth/login', component: LoginComponent },
  {path: 'api/userrrr', component: DashboardComponentComponent }
]

@NgModule({
  declarations: [
    LoginOrRegisterComponent, 
    RegistrationComponent, LoginComponent, MainComponent, DashboardComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { 

}
