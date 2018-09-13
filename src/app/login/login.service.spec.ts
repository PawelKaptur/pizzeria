import {inject, TestBed} from '@angular/core/testing';

import {LoginService} from './login.service';
import {HttpClientModule} from "@angular/common/http";
import {Router} from "@angular/router";

class RouterMock {

}

describe('LoginService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginService,
        {provide: Router, useClass: RouterMock}
      ],
      imports: [HttpClientModule]
    });
  });

  it('should be created', inject([LoginService], (service: LoginService) => {
    expect(service).toBeTruthy();
  }));
});
