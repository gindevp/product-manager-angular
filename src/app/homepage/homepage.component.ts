import {Component, OnInit} from '@angular/core';
import {Product} from "../product";
import {ProductService} from "../product.service";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  products: Product[] = [];

  constructor(private productService: ProductService) {
    this.getAll();
  }
  getAll() {
    this.productService.getAllProduct().subscribe(products => {
      this.products = products;
      this.products.map(product => {
        product.createDate = new Date(product.createDate);
      })
    })
  }

  delete(id){
    this.productService.deleteProduct(id).subscribe();
    this.getAll();
  }

  ngOnInit(): void {

  }

}
