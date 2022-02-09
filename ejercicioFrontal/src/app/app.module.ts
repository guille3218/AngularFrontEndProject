import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuNavComponent } from './menu-nav/menu-nav.component';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { ClientTableComponent } from './client-table/client-table.component';
import { UpdateClientFormComponent } from './update-client-form/update-client-form.component';
import { ClientDetailsComponent } from './client-details/client-details.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

@NgModule({
  declarations: [
    AppComponent,
    MenuNavComponent,
    HomeComponent,
    FormComponent,
    ClientTableComponent,
    UpdateClientFormComponent,
    ClientDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
