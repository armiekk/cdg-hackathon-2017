import { Component, OnInit } from '@angular/core';
import { ReportService } from './services/report.service';


@Component({
    selector: 'app-page-report',
    templateUrl: './report.component.html',
})
export class ReportComponent implements OnInit {
    data = [];
    constructor(
        private $report: ReportService,
    ) { }
    ngOnInit() {
        this.$report.getMockupReport().subscribe(val => this.data = val);
    }
}