import { TestBed, inject } from '@angular/core/testing';

import { LoginService } from './login.service';
import {HttpClient, HttpHandler} from "@angular/common/http";
import {Router} from "@angular/router";

class RouterMock {

}

describe('LoginService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginService,
      HttpClient,
      HttpHandler,
        {provide: Router, useClass: RouterMock}
      ]
    });
  });

  it('should be created', inject([LoginService], (service: LoginService) => {
    expect(service).toBeTruthy();
  }));
});
