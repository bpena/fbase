import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardView } from './views/dashboard/dashboard.view';
import { AdminComponent } from './admin.component';
import { AdminRouting } from './admin.routing';

@NgModule({
  imports: [
    CommonModule,
    AdminRouting
  ],
  declarations: [DashboardView, AdminComponent]
})
export class AdminModule { }
