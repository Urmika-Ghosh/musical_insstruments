import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceService } from './ser/service.service';
import { ProductsComponent } from './products/products.component';
import { DetailsComponent } from './details/details.component';
import { InfoComponent } from './info/info.component';
import { CompoComponent } from './compo/compo.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    DetailsComponent,
    InfoComponent,
    CompoComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    ServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
