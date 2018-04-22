import { Component, OnInit } from '@angular/core';
import { moveIn, fallIn } from '@core/animations/router.animations';
import { AuthI18NService } from '@security/auth/i18n/auth-i18n.service';
import { Router } from '@angular/router';
import { AuthService } from '@security/auth/services/auth.service';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { PasswordValidation } from '@core/utils/validators/password.validation';
import { RoutingConstants } from '@core/commons/routing.constants';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [moveIn()],
    host: {
        class: 'view',
        '[@moveIn]': ''
    }
})
export class SignupComponent implements OnInit {

    private signupForm: FormGroup;

    constructor(private authService: AuthService,
        private i18n: AuthI18NService,
        private router: Router) { }

    ngOnInit() {
        this.signupForm = new FormGroup({
            password: new FormControl(null, Validators.required),
            confirmPassword: new FormControl(null, Validators.required),
            email: new FormControl(null, [
                Validators.required,
                Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
            ])
        },
            PasswordValidation.MatchPassword);
    }

    onSubmit(form: NgForm) {
        if (form.valid) {
            const { username, password, firstname, lastname, email } = form.value;
            this.authService.signup(email, password)
                .then(success => this.router.navigateByUrl(RoutingConstants.URL_SIGNIN))
                .catch(error => console.log(error));
        }
    }
}
