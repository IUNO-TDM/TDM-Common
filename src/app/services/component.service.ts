import { Injectable, Inject, Optional } from '@angular/core';
import { CocktailComponent } from '../model/cocktail';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ComponentService {
  private _components: BehaviorSubject<CocktailComponent[]> = new BehaviorSubject([])
  public readonly components: Observable<CocktailComponent[]> = this._components.asObservable()

  private _recommendedComponents: BehaviorSubject<CocktailComponent[]> = new BehaviorSubject([])
  public readonly recommendedComponents: Observable<CocktailComponent[]> = this._recommendedComponents.asObservable()

  private sourceUrl?: string
  private recommendedComponentIds: string[] = []

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
    this._components.next(components)
    this.updateRecommendedComponents()
  }

  setRecommendComponentIds(componentIds: string[]) {
    this.recommendedComponentIds = componentIds
    this.updateRecommendedComponents()
  }

  updateComponents() {
    // console.log("Update components, srcUrl = "+this.sourceUrl)
    if (this.sourceUrl != null) {
      // console.log("Starting http request")
      this.http.get<CocktailComponent[]>(this.sourceUrl).subscribe(components => {
        // console.log("http request done")
        this._components.next(components)
        this.updateRecommendedComponents()
        });
    }
  }

  private updateRecommendedComponents() {
    var recommended: CocktailComponent[] = []
    this._components.value.forEach(component => {
      if (this.recommendedComponentIds.indexOf(component.id) > -1) {
        recommended.push(component)
      }
    })
    this._recommendedComponents.next(recommended)
  }

}
