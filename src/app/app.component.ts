import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'samplProj'

  constructor() { }

  ngOnInit() {

  }
  public template:any

  form() {
console.log();

  }


  public citylist: any[] = [
    {
      name: "chennai",
    },
    {
      name: "madurai",
    },
    {
      name: "trichy",
    },
    {
      name: "singampunari",
    },
    {
      name: "kannyakumari",
    },

  ]


}


