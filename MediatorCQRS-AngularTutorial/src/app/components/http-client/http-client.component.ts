import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/interfaces/user.interface';
import { HttpPostComponent } from './http-post/http-post.component';

@Component({
  selector: 'app-http-client',
  templateUrl: './http-client.component.html',
  styleUrls: ['./http-client.component.scss']
})
export class HttpClientComponent implements OnInit {
  users: IUser[] = [];

  constructor(private http: HttpClient, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.http.get<IUser[]>('https://localhost:44312/api/User')
      .subscribe(usersGet => {
        this.users = usersGet;
      });
  }

  onCreate(): any {
    const dialogConfig = new MatDialogConfig();
    // dialogConfig.autoFocus = true;
    this.dialog.open(HttpPostComponent);
  }

}
