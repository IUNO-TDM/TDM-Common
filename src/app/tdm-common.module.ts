import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentService } from './services/component.service';
import { DragAndDropService } from './services/drag-and-drop.service';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [],
  exports: [
    ComponentService,
    DragAndDropService
  ]
})
export class TdmCommonModule { }
