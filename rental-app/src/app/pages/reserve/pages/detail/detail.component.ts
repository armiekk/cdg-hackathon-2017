import { Component, OnInit, } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../models/app-state';
import { RentalState, Rental, } from '../../../../models/rental';
import { RentalImage } from '../../../../models/rental-image';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { RentalService } from '../../../../services/rental.service';
import * as RentalActions from '../../../../store/actions/rental.action';
import 'rxjs/add/operator/do';
declare var $: any;

@Component({
    selector: 'page-detail',
    templateUrl: 'detail.component.html'
})

export class DetailComponent implements OnInit {
    state: RentalState;
    selectImg: RentalImage;

    constructor(
        private $store: Store<AppState>,
        private $router: Router,
        private $rental: RentalService,
        private $route: ActivatedRoute,
    ) {
        this.$store.select(state => state.rental)
            .do(this.redirectToSearch)
            .subscribe(rentalState => this.state = rentalState);
    }
    ngOnInit() {
        this.$route.queryParamMap
            .do((params: ParamMap) => this.$store.dispatch(new RentalActions.FetchRentalImage(params.get('rentalId'))))
            .subscribe();
    }

    ngAfterViewInit() {
        $('.img-carousel').slick({
            infinite: false,
            slidesToShow: 3,
            slidesToScroll: 2
        });
    }

    backToSearch = () => this.$router.navigate(['/', 'search']);

    redirectToSearch = state => !state.selectedItem.id
        ? this.$router.navigate(['/', 'search'])
        : null;

    reserveRental = (rental: Rental) => {
        this.$rental.reserveRental({ ...rental, isReserved: true, }).subscribe((res: { message: string, result: Rental }) => {
            alert(res.message);
            this.$router.navigate(['/', 'search']);
        })
    }

    goToPayment(rentalId) {
        this.$router.navigate(['../payment'], {
            queryParams: { rentalId },
            relativeTo: this.$route,
        });
    }

    onClickReserve = (rental: Rental) => confirm('ยืนยันการจองห้องพัก ?') ? this.reserveRental(rental) : null;

    onClickImgModal(img: RentalImage) {
        this.selectImg = { ...img };
    }

    onCloseImgModal() {
        this.selectImg = null;
    }
}