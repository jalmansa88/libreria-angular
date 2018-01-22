import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './app.component';
import { LibrosComponent } from './libros/libros.component';
import { LibroSearchComponent } from './libro-search/libro-search.component';
import { LibroService }          from './libro.service';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LibroDetailComponent } from './libro-detail/libro-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LibrosComponent,
    LibroSearchComponent,
    DashboardComponent,
    LibroDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,

    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),

    AppRoutingModule
  ],
  providers: [ LibroService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
