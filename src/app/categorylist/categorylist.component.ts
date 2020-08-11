import {Component, OnInit, ViewChild} from '@angular/core';
import {Category} from "../category";
import {CategoryService} from "../category.service";
import {element} from "protractor";


@Component({
  selector: 'app-categorylist',
  templateUrl: './categorylist.component.html',
  styleUrls: ['./categorylist.component.css']
})
export class CategorylistComponent implements OnInit {
  categories: Category[] = [];
  category:Category;

  constructor(
    private categoryService: CategoryService
  ) {
    this.getAll();
    this.openFormCreate()
  }

  ngOnInit(): void {
  }

  getAll(): Category[]{
    this.categoryService.getAllCategory().subscribe(categories=>{
      this.categories = categories;
    })
    return this.categories;
  }

  delete(id){
    this.categoryService.deleteCategory(id).subscribe(next=>{
      alert("thanh cong")
      for (let index = 0; index<this.categories.length; index++){
        if (this.categories[index].id == id){
          this.categories.splice(index,1);
        }
      }
      return this.categories;
    }, error => alert("error"))
  }
  openFormCreate(){
    this.category={
      id: null,
      name:"",
      description: "",
    }
  }
  getProduct(id: number){
    this.categoryService.getCategory(id).
    subscribe(category =>{
      this.category = category;
    });
    return this.category;
  }
  saveCategory(){
    if (this.category.id != null)
      this.categoryService.editCategory(this.category.id, this.category)
        .subscribe( next =>
      {
        this.categories = this.getAll();
      })

    else{
      this.categoryService.create(this.category).
      subscribe(response => {
        this.categories.push(this.category);
      });
    }

  }

}
