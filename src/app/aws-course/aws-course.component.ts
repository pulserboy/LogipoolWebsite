import { Component } from '@angular/core';
import { DatabaseOperationsService } from '../database-operations.service';

@Component({
  selector: 'app-aws-course',
  templateUrl: './aws-course.component.html',
  styleUrls: ['./aws-course.component.css']
})
export class AwsCourseComponent {

  public courseDetails:any=[]; 
  
  constructor(public sObj:DatabaseOperationsService)
  {
    this.sObj.getCoursesDetails().subscribe(data=> this.courseDetails=data);
    console.log("Inside Constructor");
     
  }

}
