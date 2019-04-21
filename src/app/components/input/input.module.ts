import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputSelectorComponent } from './input-selector/input-selector.component';
import { InputSelectorMultipleComponent } from './input-selector-multiple/input-selector-multiple.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [InputSelectorComponent, InputSelectorMultipleComponent],
  imports: [
    CommonModule, FormsModule
  ],
  exports: [InputSelectorComponent, InputSelectorMultipleComponent]
})
export class ComponentsInputModule { }
