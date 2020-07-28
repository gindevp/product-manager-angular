import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../product.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {Product} from "../product";

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {

  productForm: FormGroup = new FormGroup({
    name: new FormControl(),
    code: new FormControl(),
    createDate: new FormControl(),
    description: new FormControl()
  })
  sub:Subscription;
  product: Product;
  id: number;

  constructor(private productService: ProductService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.sub = this.activatedRoute.paramMap.subscribe(async (paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.product = await this.getProduct(this.id);
    })
  }

  ngOnInit(): void {
  }

  getProduct(id: number){
    return this.productService.getProduct(id).toPromise();
  }

  updateProduct(id:number){
    const product: Product = {
      name: this.productForm.value.name,
      code: this.productForm.value.code,
      description: this.productForm.value.description,
    }
     this.productService.updateProduct(id, product);
  }

}
