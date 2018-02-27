import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentService } from './services/component.service';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [],
  exports: [
  ]
})
export class TdmCommonModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: TdmCommonModule,
      providers: [ ComponentService ]
    };
  }  
}
