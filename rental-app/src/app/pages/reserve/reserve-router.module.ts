import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// page components
import { ReserveComponent } from './reserve.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { DetailComponent } from './pages/detail/detail.component';

const routes: Routes = [
    {
        path: '',
        component: ReserveComponent,
        children: [
            { path: '', redirectTo: 'detail', pathMatch: 'full' },
            { path: 'detail', component: DetailComponent, },
            { path: 'payment', component: PaymentComponent, },
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule],
})
export class ReserveRouterModule { }