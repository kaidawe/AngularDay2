import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Category } from '../model/category';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})

export class CategoryComponent {
  constructor(private categoryService: CategoryService) {}

  categories: Category[] = [];
  getCategories(): void {
    this.categories = this.categoryService.getCategories();
  }

  ngOnInit(): void {
    this.getCategories();
  }

@Input () categoryFilter: Category | undefined;
@Output() newCategoryFilterEvent = new EventEmitter<Category>();

setCategoryFilter(category: Category) {
  this.categoryFilter = category;
  this.newCategoryFilterEvent.emit(category);
}}
