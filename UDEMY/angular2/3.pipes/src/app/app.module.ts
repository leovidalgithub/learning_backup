import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LOCALE_ID } from '@angular/core';
import { CapitalizadoPipe, ContrasenaPipe,DomseguroPipe } from './pipes';

@NgModule({
  declarations: [
    AppComponent,
    CapitalizadoPipe,
    DomseguroPipe,
    ContrasenaPipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'en-US'}
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
