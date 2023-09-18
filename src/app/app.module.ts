import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoginOrRegisterComponent } from './components/login-or-register/login-or-register.component';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { PhotoUploaderComponent } from './components/photo-uploader/photo-uploader.component';
import { JwtInterceptor } from './interceptors/jwt-interceptor';

const appRoutes: Routes = [
  {path: 'api/auth/register', component: RegistrationComponent },
  {path: 'api/auth/login', component: LoginComponent },
  {path: 'api/user', component: PhotoUploaderComponent}
]

@NgModule({
  declarations: [
    LoginOrRegisterComponent, 
    RegistrationComponent, LoginComponent, PhotoUploaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: JwtInterceptor,
    multi: true
  }],
  bootstrap: [LoginOrRegisterComponent]
})
export class AppModule { 

}
