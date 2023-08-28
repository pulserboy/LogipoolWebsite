import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';

import { Course } from './Course';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DatabaseOperationsService {

  public databasePath="../assets/Courses_Database/Courses.json"
  constructor(public hObj:HttpClient) 
  {

  }

   public getCoursesDetails():Observable<Course[]>
   {

        return this.hObj.get<Course[]>(this.databasePath);

   }

}
