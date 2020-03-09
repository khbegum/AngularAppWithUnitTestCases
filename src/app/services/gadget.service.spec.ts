import { TestBed } from '@angular/core/testing';

import { GadgetService } from './gadget.service';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http'
import { from } from 'rxjs';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

describe('GadgetService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[HttpClientTestingModule,HttpClientModule,FormsModule,ReactiveFormsModule]
  }));

  it('should be created', () => {
    const service: GadgetService = TestBed.get(GadgetService);
    expect(service).toBeTruthy();
  });
});
