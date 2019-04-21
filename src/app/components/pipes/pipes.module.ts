import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JoinPipe } from './join.pipe';
import { ToJSONPipe } from './to-json.pipe';

@NgModule({
  declarations: [JoinPipe, ToJSONPipe],
  imports: [
    CommonModule
  ],
  exports: [JoinPipe, ToJSONPipe]
})
export class PipesModule { }
