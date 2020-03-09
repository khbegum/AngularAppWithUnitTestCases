import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {
  FormsModule,
  FormGroup,
  FormControl,Validators,FormBuilder
} from '@angular/forms';

import { RegisterService } from 'src/app/services/register.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/model/user.model';
import { HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { error } from 'util';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

 users:User[]=[

 ]

  ngOnInit() {
  }
  

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log(form.value);
      // ...our form is valid, we can submit the data
    }
  }
 
  myForm: FormGroup;

  loginObject = {
    email: '',
    password: ''
  };
  result: any;



  errorMessage: String = "";

  constructor(private registerService: RegisterService,

    private authService: AuthService,
    private router: Router ,private formBuilder:FormBuilder) {
      
        this.myForm=this.formBuilder.group({
          name:['',[Validators.required]],
          password:['',[Validators.required,Validators.minLength(8),Validators.maxLength(15)]],
          email:['',[Validators.required,Validators.email,Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$")]]
          // mobile:new FormControl('',[Validators.required,Validators.maxLength(10),Validators.minLength(10)]),
        })
    }
  // signIn() {
  //   this.authService.signInUser(this.loginObject).subscribe((response) => {
  //     console.log(response);
  //     this.result = response;
  //     console.log("Token:" + this.result.token);
  //     if (this.result.success == true) {
  //       localStorage.setItem('token', this.result.token);
  //       this.router.navigate(['/home']);
  //     }
  //     else {
  //       this.errorMessage = "invalid username or password";
  //       this.router.navigate(['/login']);
  //     }

  //   })
  // }

  addUserToServices(name,  email, password) {
    alert(name)
    this.registerService.addUser(name,email, password).subscribe((res) => {
            // console.log(HttpErrorResponse.arguments)
           
        alert("successful")
      this.router.navigate(['/login']);

    })
  }
  // submitted = false;

  // onSubmit() { this.submitted = true; }
}
