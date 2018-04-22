import { Component, OnInit } from '@angular/core';
import { AuthService } from '@security/auth/services/auth.service';
import { Router } from '@angular/router';
import { RoutingConstants } from '@core/commons/routing.constants';

@Component({
    selector: 'app-user-menu',
    templateUrl: './user-menu.component.html',
    styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent implements OnInit {
    isLogged: any;
    displayname = '';

    constructor(private authService: AuthService,
            private router: Router) { }

    ngOnInit() {
        console.log(this.authService.authenticated);
        this.isLogged = this.authService.loggedIn;
        this.displayname = this.authService.currentUserDisplayName;
    }

    logout() {
        this.authService.signout()
            .then(value => {
                const urlRedirect = RoutingConstants.URL_AFTER_LOGOUT;
                this.router.navigateByUrl(urlRedirect);
            });
    }
}
