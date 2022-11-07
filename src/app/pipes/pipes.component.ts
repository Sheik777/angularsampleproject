import { Component, ContentChildDecorator, OnInit } from '@angular/core';



@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

 public laptop = ["hp","dell","asus","macbook","lenovo"]
  

 totalday = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday']
 
 months=['jan','feb','mar','apr','may','jun','jly','aug','sep','oct','nov','dec']

  todaydate=new Date();

 
 


  constructor() { }

  ngOnInit() {
 
  }
 
}