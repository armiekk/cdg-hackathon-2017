import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

// reducers
import { rootReducer } from './reducers/root.reducer';

// effects

@NgModule({
    imports: [
        StoreModule.forFeature('search', { ...rootReducer }),
        EffectsModule.forFeature([]),
    ],
    exports: [
        StoreModule,
        EffectsModule,
    ],
})
export class SearchStoreModule { }