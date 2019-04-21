import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileGeneratorSelectorComponent } from './profile-generator-selector/profile-generator-selector.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProfileGeneratorSelectorComponent],
  imports: [
    CommonModule, FormsModule
  ],
  exports: [ProfileGeneratorSelectorComponent]
})
export class ComponentsProfileModule { }
