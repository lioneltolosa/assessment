import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarouselComponent } from './components/carousel/carousel.component';

@NgModule({
    imports: [
        CommonModule,
        NgbModule.forRoot()
    ],
    declarations: [
        HeaderComponent,
        FooterComponent,
        CarouselComponent
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        CarouselComponent
    ]
})

export class CoreModule { }
