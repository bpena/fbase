import { Component } from '@angular/core';
import { AuthService } from '@security/auth/services/auth.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'fbase';
    mobileQuery: MediaQueryList;
    isLogged: any;

    fillerNav = Array(5).fill(0).map((_, i) => `Nav Item ${i + 1}`);

    constructor(private authService: AuthService) {
        this.isLogged = this.authService.authenticated;
    }
}
