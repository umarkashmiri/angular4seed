import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';


@Injectable()
export class AuthService implements CanActivate {

    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (route.queryParams["token"]) {
            return true
        }
        this.router.navigate(['/account/login'], { queryParams: { redirect: state.url } });
        return false;
    }
}
