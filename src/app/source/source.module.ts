import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {DynamicFormsCoreModule} from '@ng-dynamic-forms/core';
import {ApiModule} from '../api/api.module';
import { SourceFindExpertComponent } from './source-find-expert/source-find-expert.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ComponentsSourceModule } from '../components/source/source.module';
import { ComponentsInputModule } from '../components/input/input.module';

@NgModule({
  declarations: [SourceFindExpertComponent],
  imports: [
    CommonModule, ReactiveFormsModule, DynamicFormsCoreModule,  ApiModule, 
    NgbModule, FormsModule, ComponentsSourceModule, ComponentsInputModule, FormsModule
  ],
  exports: [SourceFindExpertComponent]
})
export class SourceModule { }
