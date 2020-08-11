import {Component, OnInit} from '@angular/core';
import {ProductService} from "./product.service";
import {CategoryService} from "./category.service";
import {Router} from "@angular/router";
import {Category} from "./category";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'market';
  categories: Category[]= [];

  ngOnInit(): void {
  }

  constructor(private productService: ProductService,
              private categoryService: CategoryService,
              private router: Router) {
    this.getAllCategories();
  }

  getAllCategories(){
    this.categoryService.getAllCategory().subscribe(categories=>{
      this.categories = categories;
    })
  }
}


