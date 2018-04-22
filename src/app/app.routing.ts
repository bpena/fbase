import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '@core/components/dashboard/dashboard.component';
import { AuthGuard } from '@security/auth/services/auth.guard';

const ROUTES: Routes = [
    { path: '', redirectTo: '/user/profile', pathMatch: 'full'},
    {
        path: 'prueba',
        component: DashboardComponent,
        canActivate: [AuthGuard]
    }
];

export const AppRouting = RouterModule.forRoot(ROUTES);