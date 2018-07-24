import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient-model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  private ingredients: Ingredient[] = [{Name: 'First Ingredient', Amount: 5 }];

  constructor() { }

  getIngredients() {
    return this.ingredients.slice();
  }
}
