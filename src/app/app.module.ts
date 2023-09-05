import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginOrRegisterComponent } from './login-or-register/login-or-register.component';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main-component/main-component.component';

const appRoutes: Routes = [
  {path: 'api/auth/register', component: RegistrationComponent },
  {path: 'api/auth/login', component: LoginComponent }
]

@NgModule({
  declarations: [
    LoginOrRegisterComponent, 
    RegistrationComponent, LoginComponent, MainComponent
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
