import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import localeEs from "@angular/common/locales/es-CO";
import { registerLocaleData } from "@angular/common";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputFilterComponent } from './shared/components/input-filter/input-filter.component';
import { PriceFilterComponent } from './shared/components/price-filter/price-filter.component';
import { appReducers } from './store/app.reducer';
import { MaterialModule } from './shared/modules/material.module';

registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    InputFilterComponent,
    PriceFilterComponent,
    MaterialModule,
    StoreModule.forRoot(appReducers),
    SweetAlert2Module.forRoot()
  ],
  providers: [{ provide: LOCALE_ID, useValue: "es-CO" }],
  bootstrap: [AppComponent]
})
export class AppModule { }
