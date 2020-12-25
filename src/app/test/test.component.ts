import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http"

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  public name: String = "Kenza"

  public user = {
    firstname: "Kenza2",
    lastname: "Belaid",
    age: 60
  }

  public technos: String[] = ["Angular", "HTML", "CSS", "Bootstrap", "JavaScript"]

  public student: any[] = [
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/220px-User_icon_2.svg.png",
      username: "username1",
      email: "email@gmail.com",
      age: 20,
      university: "TBS",
      admistest: true
    },

    {
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/220px-User_icon_2.svg.png",
      username: "username2",
      email: "email@yahoo.com",
      age: 21,
      university: "TBS2",
      admistest: false
    }

  ]
  public categoriesList: any []=[]
  
  constructor(public http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>("https://itbs-backend.herokuapp.com/category/all")
    .subscribe(
      (result) => {this.categoriesList=result},
      (error) => {console.log(error)}
    )
  }

  deleteStudent(std: any): void {
    console.log(std)
    let indice = this.student.indexOf(std)
    this.student.splice(indice, 1)

  }


}
