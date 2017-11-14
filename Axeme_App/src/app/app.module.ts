import { PrestadorUnicoPage } from './../pages/prestador-unico/prestador-unico';
import { ConfigPage } from './../pages/config/config';
import { ComponentsModule } from './../components/components.module';
import { PipesModule } from './../pipes/pipes.module';
import { PrestadoresPage } from './../pages/prestadores/prestadores';
import { FileTransfer } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';

import { RegisterPage } from './../pages/register/register';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { InitialPage } from '../pages/initial/initial';
import { ImagePicker } from '@ionic-native/image-picker';
import { BaseProvider } from '../providers/base/base';
import { HttpClientModule } from '@angular/common/http';
import { Camera } from '@ionic-native/camera';
import { LoginPage } from '../pages/login/login';
import { AmbienteProvider } from '../providers/ambiente/ambiente';
import { PrestadorProvider } from '../providers/prestador/prestador';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Interceptor } from '../providers/interceptor';
import { CallNumber } from '@ionic-native/call-number';
import { FavoritosPage } from '../pages/favoritos/favoritos';
import { CategoriasPage } from '../pages/categorias/categorias';
import { SocialSharing } from '@ionic-native/social-sharing';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    InitialPage,
    RegisterPage,
    LoginPage,
    PrestadoresPage,
    ConfigPage,
    FavoritosPage,
    CategoriasPage,
    PrestadorUnicoPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,    
    IonicModule.forRoot(MyApp),
    PipesModule,
    ComponentsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    InitialPage,
    RegisterPage,
    LoginPage,
    PrestadoresPage,
    ConfigPage,
    FavoritosPage,
    CategoriasPage,
    PrestadorUnicoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ImagePicker,
    FileTransfer,
    File,
    Camera,
    CallNumber,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BaseProvider,
    AmbienteProvider,
    PrestadorProvider,
    SocialSharing,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi: true,
    }
  ]
})
export class AppModule {}
