import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: Recipe[] = [
    {
      id: 1,
      name: 'Recipe One',
      description: 'A Special recipe',
      ImagePath:
        'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'
    },
    {
      id: 2,
      name: 'Recipe Two',
      description: 'A Special recipe',
      ImagePath:
        'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'
    }
  ];
  constructor() {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id) {
    return this.recipes.find(r => r.id === id);
  }
}
