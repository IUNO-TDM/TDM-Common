import { TestBed, inject } from '@angular/core/testing';

import { TdmCocktailComponentService } from './cocktailComponent.service';

describe('ComponentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TdmCocktailComponentService]
    });
  });

  it('should be created', inject([TdmCocktailComponentService], (service: TdmCocktailComponentService) => {
    expect(service).toBeTruthy();
  }));
});
