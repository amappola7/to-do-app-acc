import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './ui/shared/header/header.component';
import { NavBarComponent } from './ui/shared/nav-bar/nav-bar.component';
import { TaskComponent } from './ui/shared/task/task.component';
import { SectionTitleComponent } from './ui/shared/section-title/section-title.component';
import { ToDoListComponent } from './ui/pages/to-do-list/to-do-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavBarComponent,
    TaskComponent,
    SectionTitleComponent,
    ToDoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
