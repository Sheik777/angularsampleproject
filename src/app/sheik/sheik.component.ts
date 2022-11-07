import { Component, OnInit } from '@angular/core';
import { Iemployee } from '../employee';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-component1',
  templateUrl: './sheik.component.html'
})
export class SheikComponent implements OnInit {



  studentdata: any = {
    id: 101,
    name: "Sheik jubair",
    class: "B",
    age: 21,
    num: 8072312387,

  }
  teacherdata: any = {
    id: 20012,
    name: "Sabana",
    class: "B",
    age: 26,
  }



  public studentData: any[] = [
    {
      id: 101,
      name: "Sheik jubair",
      class: "B",
      age: 21,
      num: 8072312387,
    },
    {
      id: 102,
      name: "Rahul",
      class: "B",
      age: 23,
      num: 9865043109,
    },
    {
      id: 103,
      name: "Arun",
      class: "B",
      age: 21,
      num: 80726557,
    },
    {
      id: 104,
      name: "Madhu",
      class: "B",
      age: 21,
      num: 135654387,
    },

  ]

  public games = ["cricket", "football", "kabadi", "volleyball", "shotput"]

  
  constructor() { }

  
  


  mobilelist: mobile[] = [
    {
      brand: "iphone",
      model: "13pro max",
      sanpdragon: 888
    },
    {
      brand: "samsung",
      model: "s22 ultra",
      sanpdragon: 878,
    },
    {
      brand: "redmi",
      model: "note 9pro max",
      sanpdragon: 678,
    },
    {
      brand: "iphone",
      model: "14pro max",
      sanpdragon: 888
    },
    {
      brand: "blackberry",
      model: "passport",
      sanpdragon: 855
    },
  ]

  ngOnInit(): void {
  }
  getcolor(brand: string): any {

    if (brand == "iphone") {
      return 'red';
    }
    else if (brand == "samsung") {
      return 'violet';
    }
    else if (brand == "redmi") {
      return 'blue';
    }
    else {
      return 'darkgreen'
    }
  }
  data: boolean = true;
  usertype: string = "Teacher";

  showstudata() {
    this.usertype = "Teacher";
  }
  showstudata1() {
    this.usertype = "student";
  }
}
interface mobile {
  brand: string;
  model: string;
  sanpdragon: number;
}

