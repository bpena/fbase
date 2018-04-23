import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { I18NPipe } from '@core/i18n/pipes/i18n.pipe';
import { ReplacePipe } from '@core/i18n/pipes/replace.pipe';
import { HttpModule } from '@angular/http';
import { MatButtonModule, MatIconModule, MatSnackBarModule } from '@angular/material';
import { WarningSnackbarComponent } from '@core/components/warning-snackbar/warning-snackbar.component';
import { ConnectionService } from '@core/services/connection.service';
import { I18NService } from '@core/i18n/service/i18n.service';
import { SelectLanguageComponent } from '@core/i18n/components/select-language/select-language.component';
import { EditButtonComponent } from './components/edit-button/edit-button.component';
import { CommonModule } from '@angular/common';

export const firebaseConfig = {
    apiKey: "AIzaSyAno4ijgCtPJgaPzjDioQ_yNIN_RTw1d-8",
    authDomain: "fbase-bpena.firebaseapp.com",
    databaseURL: "https://fbase-bpena.firebaseio.com",
    projectId: "fbase-bpena",
    storageBucket: "fbase-bpena.appspot.com",
    messagingSenderId: "467419519737"
}

@NgModule({
    imports: [
        AngularFireModule.initializeApp(firebaseConfig),
        AngularFireAuthModule,
        AngularFirestoreModule,
        CommonModule,
        HttpModule,
        MatButtonModule,
        MatIconModule,
        MatSnackBarModule
    ],
    declarations: [
        DashboardComponent,
        I18NPipe,
        ReplacePipe,
        SelectLanguageComponent,
        WarningSnackbarComponent,
        EditButtonComponent
    ],
    entryComponents: [
      WarningSnackbarComponent
    ],
    exports: [
        EditButtonComponent,
        I18NPipe,
        ReplacePipe,
        SelectLanguageComponent,
        WarningSnackbarComponent
    ],
    providers: [
      ConnectionService
    ]
})
export class CoreModule { }
