import { Component } from '@angular/core';
import { Category } from './model/category';
import { Tag } from './model/tag';
import { Project } from './model/project';

import { CategoryService } from './category.service';
import { TagService } from './tag.service';
import { ProjectService } from './project.service';

import { TagsComponent } from './tags/tags.component';
import { CategoryComponent } from './categories/categories.component';
import { ProjectComponent } from './projects/projects.component';



// export class Category {
//   id!: number;
//   name!: string;
//   slug!: string;
// }

// export class Tag {
//   id!: number;
//   name!: string;
//   slug!: string;
//   pivot?: any;
// }

// export class Project {
//   'id': number;
//   'title': string;
//   'slug': string;
//   'excerpt': string;
//   'body': string;
//   'url': string | null;
//   'published_date': string | null;
//   'image': string | null;
//   'thumb': string | null;
//   'category_id': number | null;
//   'created_at': string;
//   'updated_at': string;
//   'category': Category | null;
//   'tags': Tag[] | undefined;
// }

// const CATEGORIES: Category[] = [
//   { id: 1, name: 'Web Development', slug: 'web-development' },
//   { id: 2, name: 'Graphic Design', slug: 'graphic-design' },
//   { id: 3, name: 'Photography', slug: 'photography' },
// ];

// const TAGS: Tag[] = [
//   { id: 1, name: 'HTML', slug: 'html' },
//   { id: 2, name: 'CSS', slug: 'css' },
//   { id: 3, name: 'JavaScript', slug: 'javascript' },
//   { id: 4, name: 'PHP', slug: 'php' },
//   { id: 5, name: 'Laravel', slug: 'laravel' },
//   { id: 6, name: 'Vue', slug: 'vue' },
//   { id: 7, name: 'React', slug: 'react' },
//   { id: 8, name: 'Angular', slug: 'angular' },

// ];

// const PROJECTS: Project[] = [
//   {
//     id: 1,
//     title: 'Project 1',
//     slug: 'project-1',
//     excerpt: 'Project 1 excerpt',
//     body: 'Project 1 body',
//     url: 'https://www.google.com',
//     published_date: '2021-01-01',
//     image: 'https://via.placeholder.com/600x400',
//     thumb: 'https://via.placeholder.com/300x200',
//     category_id: 1,
//     created_at: '2021-01-01',
//     updated_at: '2021-01-01',
//     category: CATEGORIES[1],
//     tags: [TAGS[0], TAGS[1], TAGS[4]],
//   },
//   {
//     id: 2,
//     title: 'Project 2',
//     slug: 'project-2',
//     excerpt: 'Project 2 excerpt',
//     body: 'Project 2 body',
//     url: 'https://www.google.com',
//     published_date: '2021-01-01',
//     image: 'https://via.placeholder.com/600x400',
//     thumb: 'https://via.placeholder.com/300x200',
//     category_id: 1,
//     created_at: '2021-01-01',
//     updated_at: '2021-01-01',
//     category: CATEGORIES[2],
//     tags: [TAGS[0], TAGS[1], TAGS[2]],
//   },
//   {
//     id: 3,
//     title: 'Project 3',
//     slug: 'project-3',
//     excerpt: 'Project 3 excerpt',
//     body: 'Project 3 body',
//     url: 'https://www.google.com',
//     published_date: '2021-01-01',
//     image: 'https://via.placeholder.com/600x400',
//     thumb: 'https://via.placeholder.com/300x200',
//     category_id: 1,
//     created_at: '2021-01-01',
//     updated_at: '2021-01-01',
//     category: CATEGORIES[0],
//     tags: [TAGS[0], TAGS[1], TAGS[2]],
//   },
// ];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


 export class AppComponent {

    title = 'Dawe Showcase!';
    date = new Date();
    author = 'Haley Dawe';
  
    tagFilter: Tag | undefined;

    setTagFilter(tag: Tag) {
      this.tagFilter = tag;
    }
  
    categoryFilter: Category | undefined;

    setCategoryFilter(category: Category) {
      this.categoryFilter = category;
    }

    // categories = CATEGORIES;
    // tags = TAGS;
    // projects = PROJECTS;
    // categoryFilter: Category | undefined;
    // tagFilter: Tag | undefined;
    // handleCategoryFilter(category: Category) {
    //   this.categoryFilter = category;
    // }

    // handleTagFilter(tag: Tag) {
    //   this.tagFilter = tag;
    // }

    clearFilters() {
      this.categoryFilter = undefined;
      this.tagFilter = undefined;
    }
  }
export { Project, Tag };

