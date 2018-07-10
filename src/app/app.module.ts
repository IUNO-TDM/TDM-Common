import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { TdmCocktailComponentService } from '../public_api';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule
  ],
//  providers: [ComponentService, {provide: 'componentSourceUrl', useValue: 'http://localhost:3000/api/components'}],
  providers: [TdmCocktailComponentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
