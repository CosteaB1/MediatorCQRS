import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Initial';
  number = 4;
  arr = [1, 2, 3, 4];
  obj = { a: 1, b: { c: 2 } };

  // img = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/320px-React-icon.svg.png';
  constructor() {
    // setTimeout(() => {
    //   console.log('Time is over')
    // tslint:disable-next-line: max-line-length
    //   this.img = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png';
    // }, 5000)
  }
  inputValue = '';

  // onInput(event: KeyboardEvent): void {
  //   console.log('Event', event);
  //   this.inputValue = (event.target as HTMLInputElement).value;
  // }
  onInput(event: any): void {
    this.title = event.target.value;
  }
  onClick(): void {
    console.log('Click');
  }
  onBlur(str: string): void {
    this.inputValue = str;
  }
}
