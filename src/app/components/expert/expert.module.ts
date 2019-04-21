import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpertEvidenceAllComponent } from './expert-evidence-all/expert-evidence-all.component';
import { ExpertFindAllComponent } from './expert-find-all/expert-find-all.component';
import { ExpertFindByNameComponent } from './expert-find-by-name/expert-find-by-name.component';
import { ExpertExpertiseAllComponent } from './expert-expertise-all/expert-expertise-all.component';
import { ExpertIdentificationsAllComponent } from './expert-identifications-all/expert-identifications-all.component';
import { ExpertLogicalEvidenceAllComponent } from './expert-logical-evidence-all/expert-logical-evidence-all.component';
import { ExpertSelectorComponent } from './expert-selector/expert-selector.component';
import { FormsModule } from '@angular/forms';
import { PipesModule } from '../pipes/pipes.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ComponentsExpertiseModule } from '../expertise/expertise.module';

@NgModule({
  declarations: [ExpertEvidenceAllComponent, ExpertFindAllComponent, ExpertFindByNameComponent, ExpertExpertiseAllComponent, ExpertIdentificationsAllComponent,
    ExpertLogicalEvidenceAllComponent, ExpertSelectorComponent],
  imports: [
    CommonModule, FormsModule, PipesModule, NgbModule, ComponentsExpertiseModule
  ],
  exports: [
    ExpertEvidenceAllComponent, ExpertFindAllComponent, ExpertFindByNameComponent, ExpertExpertiseAllComponent, ExpertIdentificationsAllComponent,
    ExpertLogicalEvidenceAllComponent, ExpertSelectorComponent
  ]
})
export class ComponentsExpertModule { }
