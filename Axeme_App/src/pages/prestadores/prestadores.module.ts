import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PrestadoresPage } from './prestadores';

@NgModule({
  declarations: [
    PrestadoresPage,
  ],
  imports: [
    IonicPageModule.forChild(PrestadoresPage),
  ],
})
export class PrestadoresPageModule {}
