import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SourceSelectorComponent } from './source-selector/source-selector.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SourceSelectorComponent],
  imports: [
    CommonModule, FormsModule
  ],
  exports: [SourceSelectorComponent]
})
export class ComponentsSourceModule { }
