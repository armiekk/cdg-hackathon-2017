import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// page components
import { SearchComponent } from './search.component';

const routes: Routes = [
    { path: '', component: SearchComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule],
})
export class SearchRouterModule { }