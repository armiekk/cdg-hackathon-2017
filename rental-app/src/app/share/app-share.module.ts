import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownModule, DataListModule, ButtonModule } from 'primeng/primeng';

@NgModule({
    imports: [
        DropdownModule, DataListModule, ButtonModule,
    ],
    exports: [
        DropdownModule, DataListModule, ButtonModule,
    ],
})
export class AppShareModule { }
