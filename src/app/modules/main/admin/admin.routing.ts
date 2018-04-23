import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardView } from './views/dashboard/dashboard.view';
import { LoggedGuard } from '@security/auth/services/logged.guard';

const routes: Routes = [
  { path: 'dashboard', component: DashboardView, canActivate: [LoggedGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRouting { }
