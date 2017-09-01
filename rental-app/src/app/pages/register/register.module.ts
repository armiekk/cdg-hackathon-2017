import { NgModule, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterRouterModule } from './register-router.module';

// page components
import { RegisterComponent } from './register.component';

@NgModule({
    imports: [
        CommonModule,
        RegisterRouterModule,
    ],
    declarations: [RegisterComponent],
})
export class RegisterModule { }