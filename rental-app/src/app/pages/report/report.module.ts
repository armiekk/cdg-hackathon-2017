import { NgModule, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportRouterModule } from './report-router.module';
import { AppShareModule } from '../../share/app-share.module';
import { ReportService } from './services/report.service';

// page components
import { ReportComponent } from './report.component';

@NgModule({
    imports: [
        CommonModule,
        ReportRouterModule,
        AppShareModule,
    ],
    declarations: [ReportComponent],
    providers: [ReportService],
})
export class ReportModule { }