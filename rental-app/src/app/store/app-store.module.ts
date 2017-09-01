import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

// reducers
import { rootReducer } from './reducers/root.reducer';
// effects
import { RentalEffect } from './effects/rental.effect';

@NgModule({
    imports: [
        StoreModule.forRoot({ ...rootReducer }),
        EffectsModule.forRoot([RentalEffect]),
    ],
    exports: [
        StoreModule,
        EffectsModule,
    ],
})
export class AppStoreModule { }