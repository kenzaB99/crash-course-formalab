import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 categories=["Category 1","Category 2","Category 3"]
 public produits:any[] =[
   {
     image:"assets/img.jpg",
     name:"product1",
     price:"80 TND",
     description:"Description of the product 1 here",
   },
   {
    image:"assets/img.jpg",
    name:"product2",
    price:"50 TND",
    description:"Description of the product 2 here",
  },
  {
    image:"assets/img.jpg",
    name:"product3",
    price:"200 TND",
    description:"Description of the product 3 here",
  }
 ]
 public categoriesList: any []=[]
 public productList: any []=[]
 
  constructor(public http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>("https://itbs-backend.herokuapp.com/category/all")
    .subscribe(
      (result) => {this.categoriesList=result},
      (error) => {console.log(error)}
    )
    this.http.get<any>("https://itbs-backend.herokuapp.com/product/all")
    .subscribe(
      (result) => {this.productList=result},
      (error) => {console.log(error)}
    )

  }

}