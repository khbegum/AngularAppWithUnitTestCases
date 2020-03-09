import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'music-store-app';
  constructor(public authService:AuthService){
  }
   logOut(){
    this.authService.logOutUser();
  }
  isLoggedIn() {
    return this.authService.isLoggedIn();
  }
  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
}
