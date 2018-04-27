import { Component, OnInit } from '@angular/core';
import { moveIn, fallIn, moveInLeft } from '@core/animations/router.animations';
import { AuthService } from '@security/auth/services/auth.service';
import { Router } from '@angular/router';
import { RoutingConstants } from '@core/commons/routing.constants';
import { UserI18NService } from '@security/user/i18n/user-i18n.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PasswordValidation } from '@core/utils/validators/password.validation';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss'],
    animations: [moveIn()],
    host: {
        class: 'view',
        '[@moveIn]': ''
    }
})
export class ProfileComponent implements OnInit {
    private user: any;
    private error: any;
    private profileForm: FormGroup;

    constructor(private authService: AuthService,
        private i18n: UserI18NService,
        private router: Router) { }

    ngOnInit() {

        this.profileForm = new FormGroup({
            username: new FormControl({value: null, disabled: true}, Validators.required),
            password: new FormControl({value: null, disabled: true}),
            confirmPassword: new FormControl({value: null, disabled: true}),
            email: new FormControl({value: null, disabled: true}, [
                Validators.required,
                Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
            ]),
            firstname: new FormControl({value: null, disabled: true}),
            lastname: new FormControl({value: null, disabled: true})
        },
            PasswordValidation.MatchPassword);

        this.user = this.authService.currentUser;
    }

    enableToggle(element: string) {
        if (this.profileForm.get(element).enabled) {
            this.profileForm.get(element).disable();
        }
        else {
            this.profileForm.get(element).enable();
        } 
    }
}
