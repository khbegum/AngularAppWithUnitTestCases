import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginObject = {
    email: '',
    password: ''
  };
  result: any;
  errorMessage: string = "";
   
  constructor(private authService: AuthService,private router:Router,private registerService:RegisterService) {
    
   }
  signIn() {
    
    this.authService.signInUser(this.loginObject).subscribe((response) => {
     
      console.log(response);
      
      this.result = response;
      console.log(this.result.success)
      alert(this.result.token)
      alert(this.result._id)
      console.log("Token:" + this.result.token);
      const isAuthenticated=this.result.success;
     
      if (isAuthenticated == true) {
        sessionStorage.setItem('token', this.result.token);
        sessionStorage.setItem('_id',this.result._id);
        this.router.navigate(['/']);
        
  
      }
      else {
         this.errorMessage = "invalid username or password";
        this.router.navigate(['/login']);
      }

    })
  }
  ngOnInit() {
  }
  
}
