import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { PaymentService } from '../../services/payment.service';

@Component({
    selector: 'page-payment',
    templateUrl: './payment.component.html',
    styleUrls: ['./payment.component.css'],
})

export class PaymentComponent implements OnInit {

    rentalId: string;
    selectedFile: File;
    fileName: string;
    amount: number;

    constructor(
        private $route: ActivatedRoute,
        private $router: Router,
        private $payment: PaymentService,
    ) { }

    ngOnInit() {
        this.$route.queryParamMap
            .do((params: ParamMap) => this.rentalId = params.get('rentalId'))
            .subscribe()
    }

    onSelectFile(event) {
        this.selectedFile = event.target.files[0];
        this.fileName = this.selectedFile.name;
    }

    uploadSlip(rentalId: string, amount: number, file: File) {
        this.$payment
            .uploadAndReserve({ rentalId, amount }, file)
            .subscribe(console.log);
        this.backToSearch();
    }

    backToSearch() {
        this.$router.navigate(['/search']);
    }
}