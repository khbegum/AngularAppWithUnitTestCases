import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { MatSliderModule } from '@angular/material/slider';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { FormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

describe('AppComponent', () => {
  let component:AppComponent;
  let authService:AuthService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
HttpClientTestingModule,
RouterTestingModule,MatSliderModule,
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
  it('#clicked() should toggle #isOn', () => {
    let comp=new AppComponent(authService);
    
    expect(comp.navbarOpen).toBe(false, 'off at first');
    comp.toggleNavbar();
    expect(comp.navbarOpen).toBe(true, 'on after click');
    comp.toggleNavbar();
    expect(comp.navbarOpen).toBe(false, 'off after second click');
  });
  it("check for loggedIn",()=>{
    let router:Router;
    let http:HttpClient
    let service=new AuthService(router,http)
    let comp=new AppComponent(service)
    expect(service.isLoggedIn()).toBe(false);
    comp.isLoggedIn();
    expect(comp.isLoggedIn()).toBeFalsy()
  })
  it("for logout",()=>{
    let router:Router;
    let http:HttpClient
    let service=new AuthService(router,http)
    let comp=new AppComponent(service)
  
    let spy=spyOn(service,'logOutUser')
    comp.logOut()
    expect(spy).toHaveBeenCalled()
   
    

  })
  


  

  
});
