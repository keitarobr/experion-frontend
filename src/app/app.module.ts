import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Provider, forwardRef } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ExpertModule} from './expert/expert.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './interceptors/token-interceptor';
import { LogoutComponent } from './logout/logout.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { JwtInterceptor } from './interceptors/jwt-interceptor';
import { InterceptorsModule } from './interceptors/interceptors.module';
import { ComponentsCoreModule } from './components/core/core.module';
import { ServicesModule } from './services/services.module';


export const API_INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  useExisting: forwardRef(() => TokenInterceptor),
  multi: true
};

export const API_INTERCEPTOR_PROVIDER_401: Provider = {
  provide: HTTP_INTERCEPTORS,
  useExisting: forwardRef(() => JwtInterceptor),
  multi: true
};


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    ExpertModule,
    InterceptorsModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,    
    RouterModule,    
    ComponentsCoreModule,
    FlashMessagesModule.forRoot()
  ],  
  providers: [
    TokenInterceptor,
    JwtInterceptor,
    API_INTERCEPTOR_PROVIDER,
    API_INTERCEPTOR_PROVIDER_401
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
