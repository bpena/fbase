import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SigninComponent } from "@security/auth/views/signin/signin.component";
import { SignupComponent } from "@security/auth/views/signup/signup.component";
import { AuthComponent } from "@security/auth/auth.component";

const ROUTES: Routes = [
    { 
        path: 'auth',
        component: AuthComponent,
        children: [
            { path: 'signin', component: SigninComponent },
            { path: 'signup', component: SignupComponent }        
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(ROUTES)],
    exports: [RouterModule]
})
export class AuthRouting {}