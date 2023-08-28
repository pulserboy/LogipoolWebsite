import { Component } from '@angular/core';
import { DatabaseOperationsService } from '../database-operations.service';

@Component({
  selector: 'app-cyber-security',
  templateUrl: './cyber-security.component.html',
  styleUrls: ['./cyber-security.component.css']
})
export class CyberSecurityComponent {
  public courseDetails:any=[]; 
  

 
  constructor(public sObj:DatabaseOperationsService)
  {
    this.sObj.getCoursesDetails().subscribe(data=> this.courseDetails=data);
    console.log("Inside Constructor");
   
  
    
  }
}
