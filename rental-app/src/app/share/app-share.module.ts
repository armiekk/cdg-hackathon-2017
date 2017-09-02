import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownModule, DataListModule, ButtonModule } from 'primeng/primeng';
import { UserBarComponent } from './components/user-bar/user-bar.component';

@NgModule({
    declarations: [
        UserBarComponent
    ],
    imports: [
      CommonModule,
        DropdownModule, DataListModule, ButtonModule,
    ],
    exports: [
        DropdownModule, DataListModule, ButtonModule,
        // components
        UserBarComponent,
    ],
})
export class AppShareModule { }
