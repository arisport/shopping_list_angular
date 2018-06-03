import {Component, OnInit} from '@angular/core';
import {IngrediendModel} from '../../../shared/ingrediend.model';

@Component({
  selector: 'app-shopping-list-component',
  templateUrl: './shopping-list-component.component.html',
  styleUrls: ['./shopping-list-component.component.css']
})
export class ShoppingListComponentComponent implements OnInit {

  ingredients: IngrediendModel [] = [ new IngrediendModel('apples', 5),
  new IngrediendModel('banana', 9)];

  constructor() {
  }

  ngOnInit() {
  }

  onIngredientAdded(model: IngrediendModel) {
    this.ingredients.push(model);
  }
}
