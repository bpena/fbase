import { Routes, RouterModule } from '@angular/router';

const ROUTES: Routes = [
    { path: '', redirectTo: '/user/profile', pathMatch: 'full' },
];

export const AppRouting = RouterModule.forRoot(ROUTES);