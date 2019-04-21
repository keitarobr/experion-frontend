import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsSourceModule } from './source/source.module';
import { ComponentsInputModule } from './input/input.module';
import { ComponentsLanguageModule } from './language/language.module';
import { ComponentsLogicalEvidenceModule } from './logical-evidence/logical-evidence.module';
import { ComponentsExpertModule } from './expert/expert.module';
import { ComponentsExpertiseModule } from './expertise/expertise.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule, ComponentsExpertModule, ComponentsExpertiseModule, ComponentsInputModule, ComponentsSourceModule, ComponentsLanguageModule, ComponentsLogicalEvidenceModule
  ]
})
export class ComponentsModule { }
