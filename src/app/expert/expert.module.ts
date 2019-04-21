import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpertAddComponent } from './expert-add/expert-add.component';
import { ExpertAddIdentificationComponent } from './expert-add-identification/expert-add-identification.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {DynamicFormsCoreModule} from '@ng-dynamic-forms/core';
import {ApiModule} from '../api/api.module';
import { ExpertCollectEvidencesComponent } from './expert-collect-evidences/expert-collect-evidences.component';
import { SourceModule } from '../source/source.module';
import { ExpertEvidenceInputComponent } from './expert-evidence-input/expert-evidence-input.component';
import { ExpertGenerateLogicalEvidenceComponent } from './expert-generate-logical-evidence/expert-generate-logical-evidence.component';
import { ExpertiseModule } from '../expertise/expertise.module';
import { DataTablesModule } from 'angular-datatables';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ComponentsInputModule } from '../components/input/input.module';
import { ComponentsLanguageModule } from '../components/language/language.module';
import { ComponentsLogicalEvidenceModule } from '../components/logical-evidence/logical-evidence.module';
import { ComponentsExpertModule } from '../components/expert/expert.module';
import { ComponentsExpertiseModule } from '../components/expertise/expertise.module';
import { ComponentsProfileModule } from '../components/profile/components-profile.module';
import { ComponentsSourceModule } from '../components/source/source.module';
import { PipesModule } from '../components/pipes/pipes.module';

@NgModule({
  declarations: [ExpertAddComponent, ExpertAddIdentificationComponent, ExpertCollectEvidencesComponent, ExpertEvidenceInputComponent, ExpertGenerateLogicalEvidenceComponent
    ],
  imports: [
    CommonModule, ReactiveFormsModule, DynamicFormsCoreModule, FormsModule,
    ApiModule,
    SourceModule, ComponentsInputModule, ComponentsLanguageModule, ComponentsSourceModule, PipesModule,
    ComponentsLogicalEvidenceModule, ComponentsProfileModule, ExpertiseModule, DataTablesModule, NgbModule, ComponentsExpertiseModule, ComponentsExpertModule
  ],
  exports: [ExpertAddComponent, ExpertAddIdentificationComponent, ExpertCollectEvidencesComponent, ExpertEvidenceInputComponent, ExpertGenerateLogicalEvidenceComponent
    ],
})
export class ExpertModule { }
