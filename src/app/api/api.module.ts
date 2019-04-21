/* tslint:disable */
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiConfiguration } from './api-configuration';

import { AuthControllerService } from './services/auth-controller.service';
import { BasicErrorControllerService } from './services/basic-error-controller.service';
import { ExpertControllerService } from './services/expert-controller.service';
import { ExpertiseControllerService } from './services/expertise-controller.service';
import { InputControllerService } from './services/input-controller.service';
import { LogicalEvidenceControllerService } from './services/logical-evidence-controller.service';
import { UserinfoControllerService } from './services/userinfo-controller.service';
import { ProfileControllerService } from './services/profile-controller.service';
import { SourceControllerService } from './services/source-controller.service';
import { TokenInterceptor } from '../interceptors/token-interceptor';

/**
 * Provider for all Api services, plus ApiConfiguration
 */
@NgModule({
  imports: [
    HttpClientModule
  ],
  exports: [
    HttpClientModule
  ],
  declarations: [],
  providers: [
    ApiConfiguration,
    AuthControllerService,
    BasicErrorControllerService,
    ExpertControllerService,
    ExpertiseControllerService,
    InputControllerService,
    LogicalEvidenceControllerService,
    UserinfoControllerService,
    ProfileControllerService,
    SourceControllerService
  ],
})
export class ApiModule { }
