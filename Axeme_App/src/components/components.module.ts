import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { CardPrestadorComponent } from './card-prestador/card-prestador';
@NgModule({
	declarations: [CardPrestadorComponent],
	imports: [IonicModule],
	exports: [CardPrestadorComponent]
})
export class ComponentsModule {}
