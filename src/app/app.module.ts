import { CommonModule, DatePipe, DecimalPipe, registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import es from '@angular/common/locales/es';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AppMaterialModule } from './app.material';
import { UnitPipe } from './pipes/unit.pipe';
import { MoneyPipe } from './pipes/money.pipe';
import { EnergyPipe } from './pipes/energy.pipe';
import { ChartModule } from 'angular-highcharts';

registerLocaleData(es);

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DashboardComponent,
  ],
  imports: [
    AppMaterialModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CommonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    HttpClientModule,
    MatInputModule,
    FormsModule,
    MatTabsModule,
    MatFormFieldModule,
    MatCheckboxModule,
    NgbModule,
    ChartModule
  ],
  exports: [],
  providers: [
    {
      provide: MAT_DATE_LOCALE, useValue: 'es-MX'
    },
    DatePipe,
    EnergyPipe,
    MoneyPipe,
    UnitPipe,
    DecimalPipe
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
