import { ActionReducer } from '@ngrx/store';
import * as RentalActions from '../actions/rental.action';
import { RentalState } from '../../models/rental';
import { Buffer } from 'buffer';

type Action = RentalActions.ALL;

const initialState: RentalState = {
    data: [],
    invalidate: false,
    isFetching: false,
    selectedItem: {},
    image: {
        isFetching: false,
        data: [],
        invalidate: false,
    }
}

export const RentalReducer: ActionReducer<RentalState> = (state: RentalState = initialState, action: Action) => {
    switch (action.type) {
        case RentalActions.FETCH_RENTAL_LIST:
        case RentalActions.FILTER_RENTAL_LIST_BY_FEE:
            return {
                ...state,
                isFetching: true,
            };
        case RentalActions.SUCCESS_FETCH_RENTAL_LIST:
            return {
                ...state,
                isFetching: false,
                data: action.payload.map(val => ({ ...val }))
            };
        case RentalActions.FAILED_FETCH_RENTAL_LIST:
            return {
                ...initialState,
                invalidate: true,
            };
        case RentalActions.SELECT_RENTAL:
            return {
                ...state,
                selectedItem: { ...action.payload }
            };
        case RentalActions.CLEAR_SELECT_RENTAL:
            return {
                ...state,
                selectedItem: {}
            };
        case RentalActions.RESET_RENTAL_LIST:
            return {
                ...state,
                data: [],
            };
        case RentalActions.FETCH_RENTAL_IMAGE:
            return {
                ...state,
                image: {
                    ...state.image,
                    isFetching: true,
                }
            };
        case RentalActions.SUCCESS_FETCH_RENTAL_IMAGE:
            return {
                ...state,
                image: {
                    ...state.image,
                    isFetching: false,
                    data: action.payload.map(val => {
                        /**
                         * 
                         * convert image binary object that store in NoSQL to base64 for display in [img] tag 
                         * https://stackoverflow.com/questions/8305988/convert-binary-tostringencode64-back-to-binary
                         * https://stackoverflow.com/questions/6182315/how-to-do-base64-encoding-in-node-js
                         * 
                         */
                        let imgBase64 = new Buffer(val.file.buffer.data).toString('base64');
                        return { ...val, file: `data:image/jpeg;base64,${imgBase64}` };
                    })
                }
            };
        case RentalActions.FAILED_FETCH_RENTAL_IMAGE:
            return {
                ...state,
                image: {
                    ...initialState.image,
                    invalidate: true,
                }
            };
        default:
            return state;
    }
}