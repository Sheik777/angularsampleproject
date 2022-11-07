import { Injectable } from '@angular/core';
import { Iemployee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }
  
  employee:Iemployee[]=[{
    id:101,
    name:'sheik',
    company:'xyz'

  },
  {
    id:102,
    name:'sheik',
    company:'xyz'

  },
  {
    id:103,
    name:'sheik',
    company:'xyz'

  },
  {
    id:104,
    name:'sheik',
    company:'xyz'

  }]
  

getEmployee():Iemployee[]
{
  return this.employee;
}
} 