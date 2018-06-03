import {Component, Input, OnInit} from '@angular/core';
import {RecipeModel} from '../recipe.model';

@Component({
  selector: 'app-recipe-detail-component',
  templateUrl: './recipe-detail-component.component.html',
  styleUrls: ['./recipe-detail-component.component.css']
})
export class RecipeDetailComponentComponent implements OnInit {

  @Input('recipeModel') model: RecipeModel;

  constructor() { }

  ngOnInit() {
  }

}
