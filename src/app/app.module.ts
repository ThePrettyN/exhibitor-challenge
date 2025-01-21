import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Header/header.component';
import { MainModule } from './Main/main.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [BrowserModule, FormsModule, MainModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
