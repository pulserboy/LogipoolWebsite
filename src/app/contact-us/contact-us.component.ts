import { Component } from '@angular/core';
import {EmailValidator, FormBuilder,FormGroup,Validators} from '@angular/forms'

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {

  public today:any;

  nForm:FormGroup;
  
  // post:any;
  
  // description:String= '';
  
  name:string= '';

  // phno:any;

  email:any;

  // Use dependency injection for FormBuilder
  constructor(private fb : FormBuilder)
  {
    this.nForm = fb.group(
        {
      'name' : [null,Validators.required],
      // 'description' : [null,Validators.compose([Validators.required,Validators.minLength(10),Validators.maxLength(20)])],
      // 'phno' : [null,Validators.compose([Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern("[0-9 ]{10}")])],
      'email' : [null,Validators.compose([Validators.required,Validators.email])],
      'validate': ''
        }
    )
  }

}
