import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { AdminModule } from './admin/admin.module';
import { FrontModule } from './front/front.module';

const routes: Routes = [
    { path: 'admin', loadChildren: () => AdminModule },
    { path: 'app', loadChildren: () => FrontModule }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MainRouting { }
