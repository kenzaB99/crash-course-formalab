import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http"

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html', 
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
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
