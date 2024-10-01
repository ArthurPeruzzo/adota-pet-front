import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { HeaderModule } from './header/header.module';
import { AnimalSearchModule } from './animal-search/animal-search.module';
import { FooterModule } from "./footer/footer.module";
import { ContactDialogComponent } from './shared/contact-dialog/contact-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    HeaderModule,
    AnimalSearchModule,
    HttpClientModule,
    FooterModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
