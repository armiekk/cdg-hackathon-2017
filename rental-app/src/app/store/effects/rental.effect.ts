import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import * as RentalActions from '../actions/rental.action';
import { RentalService } from '../../services/rental.service';
import { Rental } from '../../models/rental';
import { RentalImage } from '../../models/rental-image';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';


@Injectable()
export class RentalEffect {

    constructor(
        private $action: Actions,
        private $rental: RentalService,
    ) { }

    @Effect() $fetchRentalList = this.$action
        .ofType(RentalActions.FETCH_RENTAL_LIST)
        .map(toPayload)
        .switchMap(() => this.$rental.findRentalList())
        .map((res: Rental[]) => new RentalActions.SuccessFetchRentalList(res))
        .catch(() => Observable.of(new RentalActions.FailedFetchRentalList()));

    @Effect() $filterRentalListByFeeType = this.$action
        .ofType(RentalActions.FILTER_RENTAL_LIST_BY_FEE)
        .map(toPayload)
        .switchMap((feeType) => this.$rental.findRentalList({ feeType }))
        .map((res: Rental[]) => new RentalActions.SuccessFetchRentalList(res))
        .catch(() => Observable.of(new RentalActions.FailedFetchRentalList()));

    @Effect() $fetchRentalImage = this.$action
        .ofType(RentalActions.FETCH_RENTAL_IMAGE)
        .map(toPayload)
        .switchMap((rentalId: string) => this.$rental.findImageByRentalId(rentalId))
        .map((res: RentalImage[]) => new RentalActions.SuccessFetchRentalImage(res))
        .catch(() => Observable.of(new RentalActions.FailedFetchRentalImage()))

}