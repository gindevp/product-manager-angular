import {Component, OnInit} from '@angular/core';
import {Product} from "../product";
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../product.service";

@Component({
  selector: 'app-newproduct',
  templateUrl: './newproduct.component.html',
  styleUrls: ['./newproduct.component.css']
})
export class NewproductComponent implements OnInit {

  productForm: FormGroup = new FormGroup({
    name: new FormControl(),
    code: new FormControl(),
    createDate: new FormControl(),
    description: new FormControl()
  })

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
  }

  createProduct(){
    const product: Product = {
      name: this.productForm.value.name,
      code: this.productForm.value.code,
      description: this.productForm.value.description,
    }

    this.productService.createProduct(product).subscribe();
  }
}
