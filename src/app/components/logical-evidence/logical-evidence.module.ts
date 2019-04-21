import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogicalEvidenceGeneratorSelectorComponent } from './logical-evidence-generator-selector/logical-evidence-generator-selector.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [LogicalEvidenceGeneratorSelectorComponent],
  imports: [
    CommonModule, FormsModule
  ],
  exports: [LogicalEvidenceGeneratorSelectorComponent]
})
export class ComponentsLogicalEvidenceModule { }
