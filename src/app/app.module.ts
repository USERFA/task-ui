import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TasksListComponent } from './components/tasks-list/tasks-list.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { TaskEntityComponent } from './components/task-entity/task-entity.component';
import { TaskDetailsComponent } from './components/task-details/task-details.component';
import { AboutPageComponent } from './components/about-page/about-page.component';

const appRoutes: Routes = [
  {
    path: 'about',
    component: AboutPageComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TasksListComponent,
    TaskFormComponent,
    TaskEntityComponent,
    TaskDetailsComponent,
    AboutPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    FontAwesomeModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
