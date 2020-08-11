import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import {HttpClientModule} from "@angular/common/http";
import { NewproductComponent } from './newproduct/newproduct.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { EditproductComponent } from './editproduct/editproduct.component';
import { CategorylistComponent } from './categorylist/categorylist.component';
import { CategorydetailComponent } from './categorydetail/categorydetail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NewproductComponent,
    EditproductComponent,
    CategorylistComponent,
    CategorydetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
