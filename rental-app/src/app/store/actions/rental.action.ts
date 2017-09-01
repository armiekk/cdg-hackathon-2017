import { Action } from '@ngrx/store';
import { Rental } from '../../models/rental';
import { RentalImage } from '../../models/rental-image';

export const FETCH_RENTAL_LIST = 'FETCH_RENTAL_LIST';
export const SUCCESS_FETCH_RENTAL_LIST = 'SUCCESS_FETCH_RENTAL_LIST';
export const FAILED_FETCH_RENTAL_LIST = 'FAILED_FETCH_RENTAL_LIST';
export const SELECT_RENTAL = 'SELECT_RENTAL';
export const CLEAR_SELECT_RENTAL = 'CLEAR_SELECT_RENTAL';
export const RESET_RENTAL_LIST = 'RESET_RENTAL_LIST';
export const FILTER_RENTAL_LIST_BY_FEE = 'FILTER_RENTAL_LIST_BY_FEE';
export const FETCH_RENTAL_IMAGE = 'FETCH_RENTAL_IMAGE';
export const SUCCESS_FETCH_RENTAL_IMAGE = 'SUCCESS_FETCH_RENTAL_IMAGE';
export const FAILED_FETCH_RENTAL_IMAGE = 'FAILED_FETCH_RENTAL_IMAGE';


export class FetchRentalList implements Action {
    readonly type = FETCH_RENTAL_LIST;
}

export class SuccessFetchRentalList implements Action {
    readonly type = SUCCESS_FETCH_RENTAL_LIST;
    constructor(public payload: Rental[]) { }
}

export class FailedFetchRentalList implements Action {
    readonly type = FAILED_FETCH_RENTAL_LIST;
}

export class SelectRental implements Action {
    readonly type = SELECT_RENTAL;
    constructor(public payload: Rental) { }
}

export class ClearSelectRental implements Action {
    readonly type = CLEAR_SELECT_RENTAL;
}

export class ResetRentalList implements Action {
    readonly type = RESET_RENTAL_LIST;
}

export class FilterRentalListByFee implements Action {
    readonly type = FILTER_RENTAL_LIST_BY_FEE;
    constructor(public payload: number) { }
}

export class FetchRentalImage implements Action {
    readonly type = FETCH_RENTAL_IMAGE;
    constructor(public payload: string) { }
}

export class SuccessFetchRentalImage implements Action {
    readonly type = SUCCESS_FETCH_RENTAL_IMAGE;
    constructor(public payload: RentalImage[]) { }
}

export class FailedFetchRentalImage implements Action {
    readonly type = FAILED_FETCH_RENTAL_IMAGE;
}

export type ALL = FetchRentalList
    | SuccessFetchRentalList
    | FailedFetchRentalList
    | SelectRental
    | ClearSelectRental
    | ResetRentalList
    | FilterRentalListByFee
    | FetchRentalImage
    | SuccessFetchRentalImage
    | FailedFetchRentalImage;