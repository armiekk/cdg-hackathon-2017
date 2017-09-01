import { Component, OnInit, Output, Input, EventEmitter, AfterViewChecked } from '@angular/core';
import { RentalImage } from '../../../../models/rental-image';
declare var $: any;

@Component({
    selector: 'comp-rental-carousel',
    templateUrl: 'rental-carousel.component.html'
})

export class RentalCarouselComponent implements OnInit, AfterViewChecked {

    isProjectCarousel = false;

    @Input() value: RentalImage[] = [];
    @Output() clickImg: EventEmitter<RentalImage> = new EventEmitter();

    constructor() { }

    ngOnInit() {
    }

    ngAfterViewChecked() {
        if (!this.isProjectCarousel) {
            $('.image-carousel').slick({
                infinite: false,
                slidesToShow: 3,
                slidesToScroll: 2
            });
            this.isProjectCarousel = true;
        }
    }

    displayModal(img: RentalImage) {
        this.clickImg.emit({ ...img });
    }

}