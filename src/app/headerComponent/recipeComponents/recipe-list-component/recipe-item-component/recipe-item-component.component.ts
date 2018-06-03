import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RecipeModel} from '../../recipe.model';

@Component({
  selector: 'app-recipe-item-component',
  templateUrl: './recipe-item-component.component.html',
  styleUrls: ['./recipe-item-component.component.css']
})
export class RecipeItemComponentComponent implements OnInit {
  @Input() recipe: RecipeModel;
  @Output() recipeClicked = new EventEmitter<void>();

  constructor() {
  }

  ngOnInit() {
  }

  recipeOnClicked() {
    this.recipeClicked.emit();
  }
}
