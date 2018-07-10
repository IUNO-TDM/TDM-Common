import { NgModule }      from '@angular/core';
import { Component } from '@angular/core';
import { TdmCocktailComponentService, TdmCocktailComponent } from '../public_api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  availableComponents: TdmCocktailComponent[] = []
  recommendedComponents: TdmCocktailComponent[] = []
  installedComponents: TdmCocktailComponent[] = []
  constructor(componentService: TdmCocktailComponentService) {
    componentService.availableComponents.subscribe(components => {
      this.availableComponents = components;
    })
    componentService.recommendedComponents.subscribe(components => {
      this.recommendedComponents = components;
    })
    componentService.installedComponents.subscribe(components => {
      this.installedComponents = components;
    })

    componentService.setComponents([
      new TdmCocktailComponent("1", "Apfelsaft", "#7d7"),
      new TdmCocktailComponent("2", "Bananensaft", "#dd7"),
      new TdmCocktailComponent("3", "Kirschsaft", "#d77"),
      new TdmCocktailComponent("4", "Maracujasaft", "#da7"),
      new TdmCocktailComponent("5", "Ananassaft", "#dc9"),
      new TdmCocktailComponent("6", "Reserved 1", "#ddf"),
      new TdmCocktailComponent("7", "Reserved 2", "#ddf"),
      new TdmCocktailComponent("8", "Reserved 3", "#ddf"),
  ])

  componentService.setRecommendComponentIds([
      "1", "4", "7"
    ])

    componentService.setInstalledComponentIds([
      "7", "2", "8"
    ])


  }
}
