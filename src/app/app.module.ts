import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponentComponent} from './headerComponent/header-component/header-component.component';
import {ShoppingListComponentComponent} from './headerComponent/shopping-listComponents/shopping-list-component/shopping-list-component.component';
import {ShoppingListEditComponentComponent} from './headerComponent/shopping-listComponents/shopping-list-edit-component/shopping-list-edit-component.component';
import {RecipeComponentComponent} from './headerComponent/recipeComponents/recipe-component/recipe-component.component';
import {RecipeListComponentComponent} from './headerComponent/recipeComponents/recipe-list-component/recipe-list-component.component';
import {RecipeDetailComponentComponent} from './headerComponent/recipeComponents/recipe-detail-component/recipe-detail-component.component';
import { RecipeItemComponentComponent } from './headerComponent/recipeComponents/recipe-list-component/recipe-item-component/recipe-item-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    ShoppingListComponentComponent,
    ShoppingListEditComponentComponent,
    RecipeComponentComponent,
    RecipeListComponentComponent,
    RecipeDetailComponentComponent,
    RecipeItemComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
