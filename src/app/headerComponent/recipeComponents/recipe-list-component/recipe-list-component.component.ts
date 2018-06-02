import {Component, OnInit} from '@angular/core';
import {RecipeModel} from '../recipe.model';

@Component({
  selector: 'app-recipe-list-component',
  templateUrl: './recipe-list-component.component.html',
  styleUrls: ['./recipe-list-component.component.css']
})
export class RecipeListComponentComponent implements OnInit {

  recipes: RecipeModel[] = [
    new RecipeModel('Test Recipe', 'Test Desc',
      'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg')
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
