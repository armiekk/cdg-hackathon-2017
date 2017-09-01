import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReserveRouterModule } from './reserve-router.module';
import { AppShareModule } from '../../share/app-share.module';
import { ReserveStoreModule } from './store/reserve-store.module';

// page components
import { ReserveComponent } from './reserve.component';

// components
import { RentalCarouselComponent } from './components/rental-carousel/rental-carousel.component';
import { ImgModalComponent } from './components/img-modal/img-modal.component';

@NgModule({
    imports: [
        CommonModule,
        ReserveRouterModule,
        AppShareModule,
        ReserveStoreModule,
    ],
    declarations: [
        ReserveComponent,
        RentalCarouselComponent,
        ImgModalComponent,
    ],
    providers: [],
})
export class ReserveModule { }