import { Component } from '@angular/core';
import { DatabaseOperationsService } from '../database-operations.service';

@Component({
  selector: 'app-mern-stack',
  templateUrl: './mern-stack.component.html',
  styleUrls: ['./mern-stack.component.css']
})
export class MernStackComponent {

  public courseDetails:any=[]; 
  

 
  constructor(public sObj:DatabaseOperationsService)
  {
    this.sObj.getCoursesDetails().subscribe(data=> this.courseDetails=data);
    console.log("Inside Constructor");
   
  
    
  }
}
