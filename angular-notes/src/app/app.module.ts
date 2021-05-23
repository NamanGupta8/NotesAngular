import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotesComponent } from './notes/notes.component';
import { ViewNotesComponent } from './notes/view-notes/view-notes.component';
import { AddNotesComponent } from './notes/add-notes/add-notes.component';

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    ViewNotesComponent,
    AddNotesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
