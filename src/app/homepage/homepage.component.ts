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
  getAll(): Product[] {
    this.productService.getAllProduct().subscribe(products => {
      this.products = products;
      this.products.map(product => {
        product.createDate = new Date(product.createDate);
      })
    })
    return this.products
  }

  delete(id){
    if(confirm("Bạn có thực sự muốn xóa?")){
      this.productService.deleteProduct(id).subscribe(
        next =>{this.products = this.getAll();
        },
        error => {
          alert("error when delete user")
        }
      );
    }
  }

  ngOnInit(): void {

  }

}
