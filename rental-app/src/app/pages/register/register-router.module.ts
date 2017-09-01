import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// page components
import { RegisterComponent } from './register.component';

const routes: Routes = [
    { path: '', component: RegisterComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule],
})
export class RegisterRouterModule { }