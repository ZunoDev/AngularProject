import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipeSelected = new  EventEmitter<Recipe>();
  private recipes: Recipe[] = [{name: 'Recipe One', description: 'A Special recipe',
                      ImagePath: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'},
                      {name: 'Recipe Two', description: 'A Special recipe',
                      ImagePath: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'}
                    ];
  constructor() { }

  getRecipes() {
    return this.recipes.slice();
  }
}
