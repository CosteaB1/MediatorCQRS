import { HttpClient } from '@angular/common/http';
import { AfterContentChecked, AfterContentInit, AfterViewChecked, Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { IUser } from 'src/app/interfaces/user.interface';
import { HttpPostComponent } from './http-post/http-post.component';

@Component({
  selector: 'app-http-client',
  templateUrl: './http-client.component.html',
  styleUrls: ['./http-client.component.scss']
})
export class HttpClientComponent implements OnInit {
  users: IUser[] = [];
  loading = false;

  constructor(private http: HttpClient, private dialog: MatDialog) {
    dialog.afterAllClosed.subscribe(() => {
      console.log('Contructor');
      this.getUsers();
    });
  }

  ngOnInit(): void {

  }

  onCreate(): any {
    const dialogConfig = new MatDialogConfig();
    // dialogConfig.autoFocus = true;
    this.dialog.open(HttpPostComponent);
  }

  getUsers(): any {
    this.loading = true;
    this.http.get<IUser[]>('https://localhost:44312/api/User')
      .pipe(delay(1500))
      .subscribe(usersGet => {
        this.users = usersGet;
        this.loading = false;
      });
  }

}
