import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ItemsListComponent } from './components/items-list/items-list.component';
import { ItemPageComponent } from './components/item-page/item-page.component';
import { ItemComponent } from './components/item/item.component';
import { StoreModule } from '@ngrx/store';
import { itemsReducer } from './redux/reducers/items.reducer';
import { clothesTypeReducer } from './redux/reducers/clothes-type.reducer';
import { sortTypeReducer } from './redux/reducers/sort-type.reducer';
import { ImageSelectorComponent } from './components/image-selector/image-selector.component';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { cartReducer } from './redux/reducers/cart.reducer';
import { CartComponent } from './components/cart/cart.component';

const appRoutes: Routes = [
  { path: '', component: MainComponent},
  { path: 'item/:id', component: ItemComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    ItemsListComponent,
    ItemPageComponent,
    ItemComponent,
    ImageSelectorComponent,
    MainComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      items: itemsReducer,
      clothesType: clothesTypeReducer,
      sortType: sortTypeReducer,
      cart: cartReducer
    }),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
