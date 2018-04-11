import { Injectable, Inject, Optional } from '@angular/core';
import { CocktailComponent } from '../model/cocktail';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ComponentService {
  private _availableComponents: BehaviorSubject<CocktailComponent[]> = new BehaviorSubject([])
  public readonly availableComponents: Observable<CocktailComponent[]> = this._availableComponents.asObservable()

  private _recommendedComponents: BehaviorSubject<CocktailComponent[]> = new BehaviorSubject([])
  public readonly recommendedComponents: Observable<CocktailComponent[]> = this._recommendedComponents.asObservable()

  private _installedComponents: BehaviorSubject<CocktailComponent[]> = new BehaviorSubject([])
  public readonly installedComponents: Observable<CocktailComponent[]> = this._installedComponents.asObservable()

  private sourceUrl?: string
  private recommendedComponentIds: string[] = []
  private installedComponentIds: string[] = []

  constructor(
    private http: HttpClient,
    @Inject('componentSourceUrl') @Optional() public componentSourceUrl?: string) {
      this.sourceUrl = componentSourceUrl
      this.updateComponents()
  }

  setComponentSourceUrl(url: string) {
    this.sourceUrl = url
    this.updateComponents()
  }

  setComponents(components: CocktailComponent[]) {
    this._availableComponents.next(components)
    this.updateRecommendedComponents()
  }

  setRecommendComponentIds(componentIds: string[]) {
    this.recommendedComponentIds = componentIds
    this.updateRecommendedComponents()
  }

  setInstalledComponentIds(componentIds: string[]) {
    this.installedComponentIds = componentIds
    this.updateInstalledComponents()
  }

  updateComponents() {
    // console.log("Update components, srcUrl = "+this.sourceUrl)
    if (this.sourceUrl != null) {
      // console.log("Starting http request")
      this.http.get<CocktailComponent[]>(this.sourceUrl).subscribe(components => {
        if (components["available"] != null) {
          var available = components["available"];
          var installed = components["installed"];
          var recommended = components["recommended"];
          this._availableComponents.next(available)
          this.setRecommendComponentIds(recommended)
          this.setInstalledComponentIds(installed)
        } else {
          // console.log("http request done")
          this._availableComponents.next(components)
        }
        this.updateRecommendedComponents()
      });
    }
  }

  private updateRecommendedComponents() {
    var recommended = this.recommendedComponentIds.map(id => {
      return this._availableComponents.value.find(component => {
        return component.id === id
      })
    })
    this._recommendedComponents.next(recommended)
  }

  private updateInstalledComponents() {
    var installed = this.installedComponentIds.map(id => {
      return this._availableComponents.value.find(component => {
        return component.id === id
      })
    })
    this._installedComponents.next(installed)
  }

}
