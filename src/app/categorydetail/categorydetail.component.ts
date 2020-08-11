import { Component, OnInit } from '@angular/core';
import {CategoryService} from "../category.service";
import {Category} from "../category";
import {Product} from "../product";
import {ProductService} from "../product.service";
import {ActivatedRoute, ParamMap} from "@angular/router";

@Component({
  selector: 'app-categorydetail',
  templateUrl: './categorydetail.component.html',
  styleUrls: ['./categorydetail.component.css']
})
export class CategorydetailComponent implements OnInit {
  products: Product[]=[];
  category: Category;
  id: Number;

  constructor(private categoryService: CategoryService,
              private productService: ProductService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe( (paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getCategory(this.id);
      this.getAll(this.id);
    })
  }

  ngOnInit(): void {
  }

  getCategory(id:Number){
    return this.categoryService.getCategory(id).subscribe(category=>{
      this.category = category;
    })
  }

  getAll(id:Number) {
    this.productService.getAllProductByCategory(id).subscribe(product=>{
      this.products = product;
    })
  }

}
