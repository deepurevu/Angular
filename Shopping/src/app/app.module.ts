import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ReciepesComponent } from './reciepes/reciepes.component';
import { ReciepesListComponent } from './reciepes/reciepes-list/reciepes-list.component';
import { ReciepesDetailComponent } from './reciepes/reciepes-detail/reciepes-detail.component';
import { ReceipeItemComponent } from './reciepes/reciepes-list/receipe-item/receipe-item.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { ShoppingEditComponent } from './shopping/shopping-edit/shopping-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ReciepesComponent,
    ReciepesListComponent,
    ReciepesDetailComponent,
    ReceipeItemComponent,
    ShoppingComponent,
    ShoppingEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
