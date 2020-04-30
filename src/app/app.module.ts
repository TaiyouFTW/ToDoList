import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// Modules
import { AppRoutingModule } from './app-routing.module';

// Core Folder
import { ErrorInterceptor } from '@core/interceptors/error.interceptor';

// FontAwesome
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faSpinner as faSpinner, faCoffee as faCoffee, faHeart as faHeart } from '@fortawesome/free-solid-svg-icons'; // Solid

// Angular material
import { MatToolbarModule } from '@angular/material';

// Components
import { AppComponent } from './app.component';
import { LoadingComponent } from '@shared/_loading/loading.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HeaderComponent } from '@core/header/header.component';
import { FooterComponent } from '@core/footer/footer.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    LoadingComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faSpinner, faCoffee, faHeart);
  }
}