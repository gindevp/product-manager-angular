import { Component, OnInit } from '@angular/core';
import {Category} from "../category";
import {CategoryService} from "../category.service";

@Component({
  selector: 'app-categorylist',
  templateUrl: './categorylist.component.html',
  styleUrls: ['./categorylist.component.css']
})
export class CategorylistComponent implements OnInit {

  categories: Category[] = [];

  constructor(
    private categoryService: CategoryService
  ) {
    this.getAll()
  }

  ngOnInit(): void {
  }

  getAll(): Category[]{
    this.categoryService.getAllCategory().subscribe(categories=>{
      this.categories = categories;
    })
    return this.categories;
  }

}
