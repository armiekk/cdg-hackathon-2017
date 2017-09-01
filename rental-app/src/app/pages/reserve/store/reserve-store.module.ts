import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
    imports: [
        StoreModule.forFeature('reserve', {}),
        EffectsModule.forFeature([]),
    ],
    exports: [
        StoreModule,
        EffectsModule,
    ],
})
export class ReserveStoreModule { }