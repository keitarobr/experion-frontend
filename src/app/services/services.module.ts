import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { LanguageService } from './language.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: []
})
export class ServicesModule { }
