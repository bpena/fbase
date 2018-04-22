import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '@core/components/dashboard/dashboard.component';
import { LoggedGuard } from '@security/auth/services/logged.guard';

const ROUTES: Routes = [
    { path: '', redirectTo: '/user/profile', pathMatch: 'full'},
    {
        path: 'prueba',
        component: DashboardComponent,
        canActivate: [LoggedGuard]
    }
];

export const AppRouting = RouterModule.forRoot(ROUTES);