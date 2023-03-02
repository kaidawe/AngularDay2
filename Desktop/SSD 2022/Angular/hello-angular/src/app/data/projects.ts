import { Project } from '../model/project';

import { CATEGORIES } from "./categories";
 import { TAGS } from "./tags";

export const PROJECTS: Project[] = [
    {
      id: 1,
      title: 'Project 1',
      slug: 'project-1',
      excerpt: 'Project 1 excerpt',
      body: 'Project 1 body',
      url: 'https://www.google.com',
      published_date: '2021-01-01',
      image: 'https://via.placeholder.com/600x400',
      thumb: 'https://via.placeholder.com/300x200',
      category_id: 1,
      created_at: '2021-01-01',
      updated_at: '2021-01-01',
      category: CATEGORIES[1],
      tags: [TAGS[0], TAGS[1], TAGS[4]],
    },
    {
      id: 2,
      title: 'Project 2',
      slug: 'project-2',
      excerpt: 'Project 2 excerpt',
      body: 'Project 2 body',
      url: 'https://www.google.com',
      published_date: '2021-01-01',
      image: 'https://via.placeholder.com/600x400',
      thumb: 'https://via.placeholder.com/300x200',
      category_id: 1,
      created_at: '2021-01-01',
      updated_at: '2021-01-01',
      category: CATEGORIES[2],
      tags: [TAGS[0], TAGS[1], TAGS[2]],
    },
    {
      id: 3,
      title: 'Project 3',
      slug: 'project-3',
      excerpt: 'Project 3 excerpt',
      body: 'Project 3 body',
      url: 'https://www.google.com',
      published_date: '2021-01-01',
      image: 'https://via.placeholder.com/600x400',
      thumb: 'https://via.placeholder.com/300x200',
      category_id: 1,
      created_at: '2021-01-01',
      updated_at: '2021-01-01',
      category: CATEGORIES[0],
      tags: [TAGS[0], TAGS[1], TAGS[2]],
    },
  ];

