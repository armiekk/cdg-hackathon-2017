import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// page components
import { ReserveComponent } from './reserve.component';

const routes: Routes = [
    { path: '', component: ReserveComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule],
})
export class ReserveRouterModule { }