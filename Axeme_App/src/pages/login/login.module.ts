import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginPage,
    ReactiveFormsModule
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
  ],
})
export class LoginPageModule {}
