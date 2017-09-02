import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PaymentService {

    private contextRoute = '/api';

    constructor(
        private $http: HttpClient,
    ) { }

    uploadAndReserve(detail: { rentalId: string, amount: number }, file: File) {
        let body: FormData = new FormData();
        body.set('rentalId', detail.rentalId);
        body.set('amount', detail.amount.toString());
        body.set('slip', file);
        return this.$http.post(`${this.contextRoute}/payment/slip`, body)
            .map(res => res);
    }
}