import { TestBed, async, tick, fakeAsync, inject } from '@angular/core/testing';
import {HttpClientModule,HttpClient} from '@angular/common/http';
import { AuthService } from './auth.service';
import {HttpTestingController, HttpClientTestingModule} from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import {User} from '../model/user.model'


describe('AuthService', () => {

  let service: AuthService;
  let httpMock: HttpTestingController;
  let router:Router;
  

 
  beforeEach(() => {
      TestBed.configureTestingModule({
          imports: [HttpClientModule, RouterTestingModule.withRoutes([]),HttpClientTestingModule],
          providers: [AuthService]
      });
      service = TestBed.get(AuthService);
        httpMock = TestBed.get(HttpTestingController);
        router = TestBed.get(Router);
        
        router.initialNavigation(); 
        let store = {};
  const mockLocalStorage = {
    getItem: (key: string): string => {
      return key in store ? store[key] : null;
    },
    setItem: (key: string, value: string) => {
      store[key] = `${value}`;
    },
    removeItem: (key: string) => {
      delete store[key];
    },
    clear: () => {
      store = {};
    }
  };
  spyOn(sessionStorage, 'getItem')
    .and.callFake(mockLocalStorage.getItem);
  spyOn(sessionStorage, 'setItem')
    .and.callFake(mockLocalStorage.setItem);
  spyOn(sessionStorage, 'removeItem')
    .and.callFake(mockLocalStorage.removeItem);
  spyOn(sessionStorage, 'clear')
    .and.callFake(mockLocalStorage.clear);
  });

  it('should be created', () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service.signInUser).toBeTruthy();
  })
  it("isLoggedIn to be checked for value null",()=>{
sessionStorage.setItem('token',"hgjhgj")
expect(sessionStorage.removeItem('token')).toBeUndefined(); // undefined
expect(sessionStorage.getItem('token')).toBeNull();
expect(service.isLoggedIn()).toBeFalsy();
  });
  it("isLoggedIn for value to be defined",()=>{
    expect(sessionStorage.removeItem('token')).toBeUndefined(); // undefined
    expect(sessionStorage.getItem('token')).toBeNull();
sessionStorage.setItem('token', 'foo')
expect(sessionStorage.getItem('token')).toBeDefined()
expect(service.isLoggedIn()).toBeTruthy();

  })

   it("loggedIn",()=>{
     service.loggedIn()
     expect(service.loggedIn()).toBeFalsy()
   })
   it("logOutUser",()=>{
    const navigateSpy = spyOn(router, 'navigate');
     service.logOutUser();    
     expect(navigateSpy).toHaveBeenCalledWith(['/register']);
     sessionStorage.setItem('token', 'foo')
expect(sessionStorage.getItem('token')).toBeDefined()
     expect(sessionStorage.removeItem('token')).toBeUndefined();
     expect((sessionStorage.getItem('token'))).toBeNull()
   })
   it('should perform login correctly',
    fakeAsync(inject([AuthService, HttpTestingController],(authService: AuthService,httpMock:HttpTestingController ) => {

          
          const user = {
            email:'afrah177@gmail.com',
            password:'1234567890'}
            let response;
          authService.signInUser(user).subscribe(
            (res) => {
              response = res
            }
          );

          const requestWrapper = httpMock.expectOne( `${service.serviceUrl}`);
          //requestWrapper.flush((response.token));

          tick();

          expect(requestWrapper.request.method).toEqual('POST');

          // expect(response.body).toEqual(responseObject);
           //expect(response.success).toBeTruthy();
        }
      )
    )
  );
      
  afterEach(() => {
   httpMock.verify();
});

 
})
