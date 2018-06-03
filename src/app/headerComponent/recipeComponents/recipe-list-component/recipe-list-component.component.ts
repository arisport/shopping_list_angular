import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {RecipeModel} from '../recipe.model';

@Component({
  selector: 'app-recipe-list-component',
  templateUrl: './recipe-list-component.component.html',
  styleUrls: ['./recipe-list-component.component.css']
})
export class RecipeListComponentComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<RecipeModel>();
  recipes: RecipeModel[] = [
    new RecipeModel('Test Recipe', 'Test Desc',
      'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg'),
    new RecipeModel('Test Recipe 2', 'Test Desc 2',
      'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg')

  ];

  constructor() {

  }

  ngOnInit() {
  }

  onRecipeClickedPressed(recipe: RecipeModel) {
    this.recipeWasSelected.emit(recipe);
  }
}
