import { Component, OnInit } from '@angular/core';
import { Iemployee } from '../employee';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  empdetail:Iemployee[]=[];
  constructor(private emp:ServiceService) { }

  ngOnInit(): void {

    this.empdetail=this.emp.getEmployee();
  }
  
  
 


}
