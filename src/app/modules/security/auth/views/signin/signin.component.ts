import { Component, OnInit, HostBinding } from '@angular/core';
import { moveIn } from '@core/animations/router.animations';
import { AuthService } from '@security/auth/services/auth.service';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RoutingConstants } from '@core/commons/routing.constants';
import { AuthI18NService } from '@security/auth/i18n/auth-i18n.service';


@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.scss'],
    animations: [moveIn()],
    host: {
        class: 'view', 
        '[@moveIn]': ''
     }
})
export class SigninComponent implements OnInit {
    private error: any;
    private signinForm: FormGroup;

    constructor(private authService: AuthService,
            private i18n: AuthI18NService,
            private router: Router) {
    }

    ngOnInit() {
        this.signinForm = new FormGroup({
            email: new FormControl(null, Validators.required),
            password: new FormControl(null, Validators.required)
        });
    }

    signIn(form: NgForm) {
        if (form.valid) {
            const { email, password } = form.value;
            this.authService.signInWithEmailAndPassword(email, password)
                .then(data => this.goToDashboard(data, this))
                .catch(this.processError);
        }
    }

    signInWithTwitter() {
        this.authService.signInWithTwitter()
            .then(data => this.goToDashboard(data, this))
            .catch(this.processError);
    }


    signInWithFacebook() {
        this.authService.signInWithFacebook()
            .then(data => this.goToDashboard(data, this))
            .catch(this.processError);
    }


    signInWithGoogle() {
        this.authService.signInWithGoogle()
            .then(data => this.goToDashboard(data, this))
            .catch(this.processError);
    }


    signInWithGithub() {
        this.authService.signInWithGithub()
            .then(data => this.goToDashboard(data, this))
            .catch(this.processError);
    }


    goToDashboard(value: any, that: any) {
        that.router.navigateByUrl(RoutingConstants.URL_HOME);
    }


    processError(err: any) {
        console.log(err);
    }
}
