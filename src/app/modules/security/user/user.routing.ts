import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProfileComponent } from "@security/user/views/profile/profile.component";
import { AuthGuard } from "@security/auth/services/auth.guard";
import { UserComponent } from "@security/user/user.component";

const ROUTES: Routes = [
    {
        path: 'user',
        component: UserComponent,
        children: [
            { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(ROUTES)],
    exports: [RouterModule]
})
export class UserRouting {}