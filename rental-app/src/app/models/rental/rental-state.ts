import { Rental } from './rental';
import { RentalImage } from '../rental-image';

export interface RentalState {

    isFetching?: boolean;
    invalidate?: boolean;
    data?: Rental[];
    selectedItem?: Rental;
    image?: {
        data?: RentalImage[];
        isFetching?: boolean;
        invalidate?: boolean;
    }
}