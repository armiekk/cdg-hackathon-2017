import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
    { path: '', redirectTo: 'search', pathMatch: 'full' },
    { path: 'login', loadChildren: './pages/login/login.module#LoginModule' },
    { path: 'register', loadChildren: './pages/register/register.module#RegisterModule' },
    { 
        path: 'search', 
        loadChildren: './pages/search/search.module#SearchModule',
        canActivate: [AuthGuard], 
    },
    { path: 'reserve', loadChildren: './pages/reserve/reserve.module#ReserveModule' },
    { path: 'report', loadChildren: './pages/report/report.module#ReportModule' },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
    ],
    exports: [RouterModule],
})
export class AppRouterModule { }