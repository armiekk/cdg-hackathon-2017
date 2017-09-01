import { NgModule, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchRouterModule } from './search-router.module';
import { AppShareModule } from '../../share/app-share.module';
import { SearchStoreModule } from './store/search-store.module';

// page components
import { SearchComponent } from './search.component';

// services

@NgModule({
    imports: [
        CommonModule,
        SearchRouterModule,
        AppShareModule,
        SearchStoreModule,
    ],
    declarations: [
        SearchComponent,
    ],

    providers: []
})
export class SearchModule { }