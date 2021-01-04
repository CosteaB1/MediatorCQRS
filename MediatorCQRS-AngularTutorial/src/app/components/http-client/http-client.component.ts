import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/interfaces/user.interface';
@Component({
  selector: 'app-http-client',
  templateUrl: './http-client.component.html',
  styleUrls: ['./http-client.component.scss']
})
export class HttpClientComponent implements OnInit {
  users: IUser[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<IUser[]>('https://localhost:44312/api/User')
      .subscribe(usersGet => {
        this.users = usersGet;
      });
  }

}
