import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Project } from '../model/project';
import { ProjectService } from '../project.service';
import { Category } from '../model/category';
import { Tag } from '../model/tag';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})


export class ProjectComponent {
  constructor(private projectService: ProjectService) {}

  
@Input() categoryFilter: Category | undefined;
@Output() newCategoryFilterEvent = new EventEmitter<Category>();
@Input() tagFilter: Tag | undefined;
@Output() newTagFilterEvent = new EventEmitter<Tag>();


  projects: Project[] = [];
  getProjects(): void {
    this.projects = this.projectService.getProjects();
  }

  ngOnInit(): void {
    this.getProjects();
  }

  setCategoryFilter(category: Category) {
    this.categoryFilter = category;
    this.newCategoryFilterEvent.emit(category);
  }

  setTagFilter(tag: Tag) {
    this.tagFilter = tag;
  }

  clearFilters() {
    this.categoryFilter = undefined;
    this.tagFilter = undefined;
  }

  handleProjectClick(project: Project) {
    this.selectedProject = project;
  }

  selectedProject?: Project;
  onSelect(project: Project): void {
    this.selectedProject = project;
  }

  clearSelectedProject(): void {
    this.selectedProject = undefined;
  }

}

