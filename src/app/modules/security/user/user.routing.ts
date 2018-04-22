import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProfileComponent } from "@security/user/views/profile/profile.component";
import { UserComponent } from "@security/user/user.component";
import { LoggedGuard } from "@security/auth/services/logged.guard";

const ROUTES: Routes = [
    {
        path: 'user',
        component: UserComponent,
        children: [
            { path: 'profile', component: ProfileComponent, canActivate: [LoggedGuard] },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(ROUTES)],
    exports: [RouterModule]
})
export class UserRouting {}