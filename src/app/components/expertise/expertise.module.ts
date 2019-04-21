import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpertiseDetailsComponent } from './expertise-details/expertise-details.component';
import { ExpertiseGeneratorSelectorComponent } from './expertise-generator-selector/expertise-generator-selector.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  declarations: [ExpertiseDetailsComponent, ExpertiseGeneratorSelectorComponent],
  imports: [
    CommonModule, FormsModule, NgbModule, PipesModule
  ],
  exports: [ExpertiseDetailsComponent, ExpertiseGeneratorSelectorComponent]
})
export class ComponentsExpertiseModule { }
