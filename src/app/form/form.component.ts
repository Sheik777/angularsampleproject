import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  bookfrm=new FormGroup({
    bookname:new FormControl('',[Validators.required]),
    bookauthor:new FormControl('',[Validators.required]),
    bookprice:new FormControl('',[Validators.required]),
    bookcatgry:new FormControl('',[Validators.required]),
  })

  category:any=[
    'Historical',
    'Novels',
    'Modivation',
    'Sprituals',
    'Comics'
  ]
  constructor() { }

  ngOnInit(): void {
  }
  addbook(){
    console.log(this.bookfrm.value);
    
  }

}
export interface book{
  bookname:string,
  bookauthor:string,
  bookprice:number,
  bookcatgry:string,
}