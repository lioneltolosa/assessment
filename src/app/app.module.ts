import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CoreModule } from './core';
import { InsurancePolicyModule } from './modules/insurance-policy/insurance-policy.module';


@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        CoreModule,
        InsurancePolicyModule
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule { }
