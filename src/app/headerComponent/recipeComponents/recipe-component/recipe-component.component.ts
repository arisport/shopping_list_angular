import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RecipeModel} from '../recipe.model';

@Component({
  selector: 'app-recipe-component',
  templateUrl: './recipe-component.component.html',
  styleUrls: ['./recipe-component.component.css']
})
export class RecipeComponentComponent implements OnInit {
  recipe: RecipeModel;

  constructor() { }

  ngOnInit() {
  }

  onSelected(model: RecipeModel) {
    this.recipe = model;
  }
}
