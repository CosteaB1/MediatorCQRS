import { Component, OnInit } from '@angular/core';

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
export class AppComponent implements OnInit {
  e: number = Math.E;
  isVisible = true;
  posts: Post[] = [
    { title: 'Vreau sa invat Angular', text: 'eu inca invat', id: 1 },
    // { title: 'Next block', text: 'directive', id: 2 }
  ];
  updatePosts(post: Post): void {
    this.posts.unshift(post);
  }
  removePost(id: number): void {
    console.log(id);
    this.posts = this.posts.filter(p => p.id !== id);
  }
  ngOnInit(): void {
    setTimeout(() => {
      console.log('timeout');
      this.posts[0] = {
        title: 'changed',
        text: 'changed2',
        id: 2
      };
    }, 5000);
  }


}
