import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public login:boolean=true;
  public regi:boolean=false;

  signIn(){
    this.login=true;
    this.regi=false;
  }
  register(){
    this.login=false;
    this.regi=true;
    
  }

}
