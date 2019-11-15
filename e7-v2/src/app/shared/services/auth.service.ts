import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs'
import {delay, tap} from 'rxjs/operators'

@Injectable()
export class AuthService {

  isLoggedIn: boolean = false

  redirectUrl: string

  constructor() { }

  login(login: string, password: string): Observable<boolean> {
    return of(true).pipe(
      delay(1000),
      tap(() => {
        if (login === 'admin' && password === 'qwerty') { this.isLoggedIn = true }
        return this.isLoggedIn
      })
    )
  }

  logout(): void {
    this.isLoggedIn = false
  }

}
