import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/primeng';
import { Store } from '@ngrx/store';
import * as RentalActions from '../../store/actions/rental.action';
import { AppState } from '../../models/app-state';
import { RentalState, Rental } from '../../models/rental';
import { Router } from '@angular/router';

@Component({
    selector: 'app-page-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

    fareRange: SelectItem[] = [];

    state: RentalState = {};

    selectedFeeRange: number = 0;

    constructor(
        private $store: Store<AppState>,
        private $router: Router
    ) {
        this.$store.select(state => state.rental)
            .subscribe(rentalState => this.state = rentalState);
    }

    ngOnInit() {
        this.fareRange = [
            { label: '0 - 3,000', value: 0 },
            { label: '3,001 - 6,000', value: 1 },
            { label: '6,001 - 10,000', value: 2 },
            { label: 'มากกว่า 10,000', value: 3 },
        ];
    }

    onSelectValue(event: { value: number }) {
        this.selectedFeeRange = event.value;
    }

    onClickRentalPost(event, rentalPost: Rental) {
        event.preventDefault();
        this.$store.dispatch(new RentalActions.SelectRental(rentalPost));
        this.$store.dispatch(new RentalActions.ResetRentalList());
        this.$router.navigate(['/', 'reserve', 'detail'], { queryParams: { rentalId: rentalPost.id } });
    }

    filterRentalList(feeType: number) {
        this.$store.dispatch(new RentalActions.FilterRentalListByFee(feeType));
    }
}