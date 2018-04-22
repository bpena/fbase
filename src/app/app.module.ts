import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatIconModule, MatSidenavModule, MatButtonModule, MatToolbarModule, MatListModule } from '@angular/material';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './modules/core/core.module';
import { AppRouting } from './app.routing';
import { SecurityModule } from '@security/security.module';
import { I18NService } from '@core/i18n/service/i18n.service';
import { AuthService } from '@security/auth/services/auth.service';
import { AuthGuard } from '@security/auth/services/auth.guard';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        AppRouting,
        BrowserModule,
        BrowserAnimationsModule,
        CoreModule,
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        MatListModule,
        MatSidenavModule,
        MatToolbarModule,
        SecurityModule
    ],
    providers: [
        AuthGuard,
        AuthService,
        I18NService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
