import { NgModule, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRouterModule } from './login-router.module';

// page components
import { LoginComponent } from './login.component';

@NgModule({
    imports: [
        CommonModule,
        LoginRouterModule,
    ],
    declarations: [LoginComponent],
})
export class LoginModule { }