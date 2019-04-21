import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DynamicFormsCoreModule } from '@ng-dynamic-forms/core';
import { ApiModule } from '../api/api.module';
import { SourceModule } from '../source/source.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ExpertGenerateExpertiseComponent } from './expert-generate-expertise/expert-generate-expertise.component';
import { ExpertGenerateProfileComponent } from './expert-generate-profile/expert-generate-profile.component';
import { ExpertiseBrowserComponent } from './expertise-browser/expertise-browser.component';
import { ComponentsInputModule } from '../components/input/input.module';
import { ComponentsExpertiseModule } from '../components/expertise/expertise.module';
import { ComponentsExpertModule } from '../components/expert/expert.module';
import { ComponentsProfileModule } from '../components/profile/components-profile.module';

@NgModule({
  declarations: [ExpertGenerateExpertiseComponent, ExpertGenerateProfileComponent, ExpertiseBrowserComponent],
  imports: [
    CommonModule, ReactiveFormsModule, DynamicFormsCoreModule,  ApiModule,SourceModule, ComponentsInputModule, NgbModule, FormsModule,
    ComponentsExpertiseModule, ComponentsExpertModule, ComponentsProfileModule
  ],
  exports: [ExpertGenerateExpertiseComponent, ExpertGenerateProfileComponent, ExpertiseBrowserComponent]
})
export class ExpertiseModule { }
