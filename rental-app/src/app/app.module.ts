import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRouterModule } from './app-router.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppStoreModule } from './store/app-store.module';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';

//env
import { environment } from '../environments/environment';

// services
import { RentalService } from './services/rental.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRouterModule,
    BrowserAnimationsModule,
    AppStoreModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [RentalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
