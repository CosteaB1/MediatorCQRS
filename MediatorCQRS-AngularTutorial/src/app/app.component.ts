import { Component } from '@angular/core';

export interface Post {
  title: string;
  text: string;
  id?: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts: Post[] = [
    { title: 'Vreau sa invat Angular', text: 'eu inca invat', id: 1 },
    { title: 'Next block', text: 'directive', id: 2 }
  ];
  updatePosts(post: Post): void {
    this.posts.unshift(post);
  }
}
