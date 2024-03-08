import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddSinhvienComponent } from './components/add-sinhvien/add-sinhvien.component';
import { SinhvienDetailsComponent } from './components/sinhvien-details/sinhvien-details.component';
import { SinhvienListComponent } from './components/sinhvien-list/sinhvien-list.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AddSinhvienComponent,
    SinhvienDetailsComponent,
    SinhvienListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
