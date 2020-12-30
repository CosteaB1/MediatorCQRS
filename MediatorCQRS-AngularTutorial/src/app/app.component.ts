import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppCounterService } from './services/app-counter.service';
import { LocalCounterService } from './services/local-counter.service';

export interface Post {
  title: string;
  text: string;
  id?: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [LocalCounterService]
})
export class AppComponent {
  constructor(public appCounterService: AppCounterService, public localCounterService: LocalCounterService) {

  }

  // p: Promise<string> = new Promise<string>(resolve => {
  //   setTimeout(() => {
  //     resolve('Promise Resolved');
  //   }, 4000);
  // });

  // date: Observable<Date> = new Observable(obs => {
  //   setInterval(() => {
  //     obs.next(new Date());
  //   }, 1000);
  // });
  // search = '';
  // searchField = 'title';
  // posts: Post[] = [
  //   { title: 'Beers', text: 'Cel mai buna bere' },
  //   { title: 'Bread', text: 'cea mai buna paine' },
  //   { title: 'JavaSCript', text: 'Typescript' }
  // ];
  // e: number = Math.E;
  // str = 'hello world';
  // date: Date = new Date();
  // float = 0.2;

  // obj1 = {
  //   a: 1,
  //   b: {
  //     c: 2,
  //     d: {
  //       e: 3,
  //       f: 4
  //     }
  //   }
  // };

  // isVisible = true;
  // // posts: Post[] = [
  // //   { title: 'Vreau sa invat Angular', text: 'eu inca invat', id: 1 },
  // //   // { title: 'Next block', text: 'directive', id: 2 }
  // // ];
  // updatePosts(post: Post): void {
  //   this.posts.unshift(post);
  // }
  // removePost(id: number): void {
  //   console.log(id);
  //   this.posts = this.posts.filter(p => p.id !== id);
  // }
  // ngOnInit(): void {
  //   setTimeout(() => {
  //     console.log('timeout');
  //     this.posts[0] = {
  //       title: 'changed',
  //       text: 'changed2',
  //       id: 2
  //     };
  //   }, 5000);
  // }
  // addPost(): any {
  //   this.posts.unshift({
  //     title: 'Angular 11',
  //     text: 'Vadelienl ANgular course'
  //   });
  // }

}
