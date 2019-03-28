import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { AddToDoComponent } from './add-to-do/add-to-do.component';
import { WeatherComponent } from './weather/weather.component';
import { KelToCelPipe } from './kel-to-cel.pipe';
import { ToDoItemActiveComponent } from './to-do-list/to-do-item/to-do-item-active/to-do-item-active.component';
import { ToDoItemPassiveComponent } from './to-do-list/to-do-item/to-do-item-passive/to-do-item-passive.component';
import { AutofocusDirective } from './autofocus.directive';

// to-do list to other module
@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    AddToDoComponent,
    WeatherComponent,
    KelToCelPipe,
    ToDoItemActiveComponent,
    ToDoItemPassiveComponent,
    AutofocusDirective
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
