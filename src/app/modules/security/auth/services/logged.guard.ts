import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { RoutingConstants } from '@core/commons/routing.constants';
import { AuthService } from '@security/auth/services/auth.service';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Injectable()
export class LoggedGuard implements CanActivate {

    constructor(private authService: AuthService,
        private router: Router) { }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return this.authService.currentUser$
            .take(1)
            .map(state => !!state)
            .do(authenticated => {
                if (!authenticated) this.router.navigate([RoutingConstants.URL_SIGNIN]);
            })
    }
}
