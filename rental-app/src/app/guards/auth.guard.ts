import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private $auth: AuthService,
        private $router: Router,
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.$auth.user
            .switchMap(val => {
                if (val && val.uid) {
                    return Observable.of(true);
                }
                this.$router.navigate(['/login']);
                return Observable.of(false)
            });
    }
}