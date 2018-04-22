import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '@security/auth/services/auth.service';
import { SigninComponent } from '@security/auth/views/signin/signin.component';
import { CoreModule } from '@core/core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule } from '@angular/material';
import { AuthRouting } from '@security/auth/auth.routing';
import { AuthI18NService } from '@security/auth/i18n/auth-i18n.service';
import { SignupComponent } from './views/signup/signup.component';
import { AuthComponent } from './auth.component';

@NgModule({
    imports: [
        AuthRouting,
        CommonModule,
        CoreModule,
        FormsModule,
        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        ReactiveFormsModule
    ],
    declarations: [
        SigninComponent,
        SignupComponent,
        AuthComponent
    ],
    providers: [
        AuthI18NService
    ]
})
export class AuthModule { }
