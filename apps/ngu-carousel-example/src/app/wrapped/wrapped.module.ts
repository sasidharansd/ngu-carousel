import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {
  NguCarousel,
  NguCarouselDefDirective,
  NguCarouselNextDirective,
  NguCarouselPrevDirective,
  NguItemComponent,
  NguTileComponent
} from '@ngu/carousel';
import { WrappedComponent } from './wrapped.component';
import { WrappedCarouselComponent } from './wrapped-carousel/wrapped-carousel.component';
import { WrappedRoutingModule } from './wrapped-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    WrappedRoutingModule,
    CommonModule,
    NguCarousel,
    NguCarouselDefDirective,
    NguCarouselNextDirective,
    NguCarouselPrevDirective,
    NguItemComponent,
    NguTileComponent,
    HttpClientModule
  ],
  exports: [],
  declarations: [WrappedComponent, WrappedCarouselComponent],
  providers: []
})
export class WrappedModule {}
