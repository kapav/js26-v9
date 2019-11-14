import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs'
import {delay, tap} from 'rxjs/operators'

@Injectable()
export class AuthService {

  isLoggedin: boolean = false

  redirectUrl: string

  constructor() { }

  login(login: string, password: string): Observable<boolean> {
    return
  }

}
