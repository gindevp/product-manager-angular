import { Component, OnInit } from '@angular/core';
import {Product} from "../product";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  product1: Product;

  constructor() {
    this.product1 = {
      id: 1,
      code: "CG01",
      name: "San pham 1",
      createDate: new Date()
    }
  }

  ngOnInit(): void {
  }

}
