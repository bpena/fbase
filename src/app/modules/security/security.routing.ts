import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthModule } from "@security/auth/auth.module";
import { UserModule } from "@security/user/user.module";

const ROUTES: Routes = [
];

@NgModule({
    imports: [RouterModule.forChild(ROUTES)],
    exports: [RouterModule]
})
export class SecurityRouting {}