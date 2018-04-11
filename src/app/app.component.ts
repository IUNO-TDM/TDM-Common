import { NgModule }      from '@angular/core';
import { Component } from '@angular/core';
import { ComponentService, CocktailComponent } from '../public_api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  availableComponents: CocktailComponent[] = []
  recommendedComponents: CocktailComponent[] = []
  installedComponents: CocktailComponent[] = []
  constructor(componentService: ComponentService) {
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
      new CocktailComponent("1", "Apfelsaft", "#7d7"),
      new CocktailComponent("2", "Bananensaft", "#dd7"),
      new CocktailComponent("3", "Kirschsaft", "#d77"),
      new CocktailComponent("4", "Maracujasaft", "#da7"),
      new CocktailComponent("5", "Ananassaft", "#dc9"),
      new CocktailComponent("6", "Reserved 1", "#ddf"),
      new CocktailComponent("7", "Reserved 2", "#ddf"),
      new CocktailComponent("8", "Reserved 3", "#ddf"),
  ])

  componentService.setRecommendComponentIds([
      "1", "4", "7"
    ])

    componentService.setInstalledComponentIds([
      "7", "2", "8"
    ])


  }
}
