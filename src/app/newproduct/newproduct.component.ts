import {Component, OnInit} from '@angular/core';
import {Product} from "../product";
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../product.service";
import {Router} from "@angular/router";

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
    createDate:null
  };
  constructor(private productService: ProductService,
              private router: Router) {
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
}
