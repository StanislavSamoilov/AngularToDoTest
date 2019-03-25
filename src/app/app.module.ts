import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { ToDoItemComponent } from './to-do-list/to-do-item/to-do-item.component';
import { AddToDoComponent } from './add-to-do/add-to-do.component';
import { WeatherComponent } from './weather/weather.component';
import { KelToCelPipe } from './kel-to-cel.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    ToDoItemComponent,
    AddToDoComponent,
    WeatherComponent,
    KelToCelPipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
