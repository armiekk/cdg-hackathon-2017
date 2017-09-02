import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DropdownModule, DataListModule, ButtonModule, InputTextModule } from 'primeng/primeng';
import { UserBarComponent } from './components/user-bar/user-bar.component';

@NgModule({
    declarations: [
        UserBarComponent
    ],
    imports: [
        FormsModule, CommonModule,
        DropdownModule, DataListModule, ButtonModule, InputTextModule
    ],
    exports: [
        FormsModule,
        DropdownModule, DataListModule, ButtonModule, InputTextModule,
        // components
        UserBarComponent,
    ],
})
export class AppShareModule { }
