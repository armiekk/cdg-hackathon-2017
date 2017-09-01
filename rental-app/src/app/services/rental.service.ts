import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Rental } from '../models/rental';
import { RentalImage } from '../models/rental-image';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';




@Injectable()
export class RentalService {

    private contextRoute = '/api'

    constructor(
        private $http: HttpClient,
    ) { }

    findRentalList(query?: Rental) {
        let fieldCondition;
        query = { ...query, isReserved: false };
        let params: HttpParams = new HttpParams();
        if (query) {
            fieldCondition = { where: query };
            params = params.set('filter', JSON.stringify(fieldCondition));
        }
        return this.$http.get(`${this.contextRoute}/rentals`, {
            params,
        })
            .map((res: Rental[]) => res);
    }

    reserveRental(rental: Rental): Observable<{ message: string, result?: Rental }> {
        return this.$http.patch(`${this.contextRoute}/rentals`, rental)
            .map((res: Rental) => ({ message: 'จองห้องสำเร็จ', result: res }))
            .catch(() => Observable.of({ message: 'ไม่สามารถจองได้' }));
    }

    findImageByRentalId(rentalId: string) {
        return this.$http.get(`${this.contextRoute}/rentals/${rentalId}/rentalImages`)
            .map((res: RentalImage[]) => res)
            .catch(() => Observable.of([]));
    }

}