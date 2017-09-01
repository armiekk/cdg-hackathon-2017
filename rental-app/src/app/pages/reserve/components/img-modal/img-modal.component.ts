import { RentalImage } from '../../../../models/rental-image/rental-image';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'comp-img-modal',
    templateUrl: 'img-modal.component.html',
    styleUrls: ['img-modal.component.css'],
})

export class ImgModalComponent implements OnInit {

    @Output() closeModal: EventEmitter<any> = new EventEmitter();

    constructor() { }

    @Input() value: RentalImage;

    ngOnInit() { }

    onCloseModal(){
        this.closeModal.emit();
    }
}