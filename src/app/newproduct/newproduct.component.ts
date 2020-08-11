import {Component, OnInit} from '@angular/core';
import {Product} from "../product";
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../product.service";
import {Router} from "@angular/router";
import {CategoryService} from "../category.service";
import {Category} from "../category";

@Component({
  selector: 'app-newproduct',
  templateUrl: './newproduct.component.html',
  styleUrls: ['./newproduct.component.css']
})
export class NewproductComponent implements OnInit {
  product: Product={
    id:0,
    name:"",
    description:"",
    code:"",
    createDate:null,
    category: {
      id: -1,
    }
  };
  categories: Category[]=[];

  constructor(private productService: ProductService,
              private categoryService: CategoryService,
              private router: Router) {
    this.getAllCategories();
  }

  ngOnInit(): void {
  }

  createProduct() {
debugger
    this.productService.createProduct(this.product)
      .subscribe(() => {
      this.router.navigate(['/']);
    });
  }

  getAllCategories(){
    this.categoryService.getAllCategory().subscribe(categories=>{
      this.categories = categories;
    })
  }
}
