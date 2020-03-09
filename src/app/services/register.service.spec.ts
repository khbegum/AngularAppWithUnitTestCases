import { TestBed } from '@angular/core/testing';

import { RegisterService } from './register.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
describe('RegisterService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: RegisterService = TestBed.get(RegisterService);
    expect(service).toBeTruthy();
  });
 

 

  // it('service method canActivate should be checked', () => {

  //   expect(RegisterService).toBeTruthy();

  // });
  
});
