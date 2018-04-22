import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecurityComponent } from '@security/security.component';
import { SecurityRouting } from '@security/security.routing';
import { AuthModule } from '@security/auth/auth.module';
import { UserModule } from '@security/user/user.module';

@NgModule({
    imports: [
        AuthModule,
        CommonModule,
        SecurityRouting,
        UserModule
    ],
    declarations: [
        SecurityComponent
    ],
    exports: [
        AuthModule,
        UserModule
    ]
})
export class SecurityModule { }
