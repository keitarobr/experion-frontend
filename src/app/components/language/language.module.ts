import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageSelectorComponent } from './language-selector/language-selector.component';
import { Language } from '../../services/language';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [LanguageSelectorComponent],
  imports: [
    CommonModule, FormsModule
  ],
  exports: [LanguageSelectorComponent]
})
export class ComponentsLanguageModule { }
