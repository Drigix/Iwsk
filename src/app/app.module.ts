import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RadioButton, RadioButtonModule } from 'primeng/radiobutton';
import { ButtonModule } from 'primeng/button'
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RadioButtonModule,
    FormsModule,
    CommonModule,
    ButtonModule
  ],
  providers: [
    RadioButton
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
