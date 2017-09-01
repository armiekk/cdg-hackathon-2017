import { NgModule, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportRouterModule } from './report-router.module';

// page components
import { ReportComponent } from './report.component';

@NgModule({
    imports: [
        CommonModule,
        ReportRouterModule,
    ],
    declarations: [ReportComponent],
})
export class ReportModule { }