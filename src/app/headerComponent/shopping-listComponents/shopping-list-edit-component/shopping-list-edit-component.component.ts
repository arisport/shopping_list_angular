import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {IngrediendModel} from '../../../shared/ingrediend.model';

@Component({
  selector: 'app-shopping-list-edit-component',
  templateUrl: './shopping-list-edit-component.component.html',
  styleUrls: ['./shopping-list-edit-component.component.css']
})
export class ShoppingListEditComponentComponent implements OnInit {

  @ViewChild('nameInput')nameInputElement: ElementRef;
  @ViewChild('amountInput')amountInputElement: ElementRef;
  @Output() ingredientAdded = new EventEmitter<IngrediendModel>()

  constructor() { }

  ngOnInit() {
  }

  onAddItem() {
    const ingretiendName = this.nameInputElement.nativeElement.value;
    const ingretiendAmount = this.amountInputElement.nativeElement.value;
    this.ingredientAdded.emit(new IngrediendModel(ingretiendName, ingretiendAmount));
  }
}
