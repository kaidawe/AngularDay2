import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProjectFilterPipe } from './project-filter.pipe';
import { ProjectComponent } from './projects/projects.component';
import { TagsComponent } from './tags/tags.component';
import { CategoryComponent } from './categories/categories.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';

@NgModule({
  declarations: [AppComponent, ProjectFilterPipe, ProjectComponent, TagsComponent, CategoryComponent, ProjectDetailComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
