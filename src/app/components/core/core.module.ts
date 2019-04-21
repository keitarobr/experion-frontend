import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ServicesModule } from 'src/app/services/services.module';
import { RouterModule } from '@angular/router';
import { FlashMessagesModule } from 'angular2-flash-messages';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule, ServicesModule, RouterModule, FlashMessagesModule
  ],
  exports: [HeaderComponent]
})
export class ComponentsCoreModule { }
