import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import {AuthService} from './auth.service'

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
    if (this.authService.isLoggedin) {
      return true
    } else {
      this.authService.redirectUrl = state.url
      this.router.navigate(['/login'])
      return false
    }
  }
  
}
