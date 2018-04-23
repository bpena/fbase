import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { MainModule } from './main.module';

const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        children: [
            { path: '', loadChildren: () => MainModule }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MainRouting { }
