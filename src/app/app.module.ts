import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { BookupdateComponent } from './bookupdate/bookupdate.component';
import { BookcreateComponent } from './bookcreate/bookcreate.component';
import { BookeditComponent } from './bookedit/bookedit.component';
import { BookdetailComponent } from './bookdetail/bookdetail.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BookupdateComponent,
    BookcreateComponent,
    BookeditComponent,
    BookdetailComponent,
  ],
  imports: [BrowserModule,AppRoutingModule, HttpClientModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
