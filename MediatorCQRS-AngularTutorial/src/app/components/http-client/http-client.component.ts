import { AfterContentChecked, AfterContentInit, AfterViewChecked, Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { IUser } from 'src/app/interfaces/user.interface';
import { HttpEditComponent } from './http-edit/http-edit.component';
import { HttpPostComponent } from './http-post/http-post.component';
import { UserService } from './user.service';

@Component({
  selector: 'app-http-client',
  templateUrl: './http-client.component.html',
  styleUrls: ['./http-client.component.scss']
})
export class HttpClientComponent implements OnInit {
  users: IUser[] = [];
  loading = false;

  constructor(private userService: UserService, private dialog: MatDialog) {
    this.dialog._getAfterAllClosed().subscribe(() => {
      console.log('constructor');
      this.getUsers();
    });
  }

  ngOnInit(): void {
    this.getUsers();
    console.log('NgInit');
  }
  onCreate(): any {
    const dialogConfig = new MatDialogConfig();
    // dialogConfig.autoFocus = true;
    this.dialog.open(HttpPostComponent);
  }
  onEdit(user: IUser): any {
    const open = this.dialog.open(HttpEditComponent);
    open.componentInstance.user = user;
  }

  getUsers(): any {
    this.loading = true;
    this.userService.fetchUsers()
      .subscribe(usersGet => {
        this.users = usersGet;
        this.loading = false;
        console.log(this.users);
      });
  }
  remove(id: number): any {
    this.userService.removeUser(id)
      .subscribe(() => {
        this.users = this.users.filter(t => t.id !== id);
      });
  }

}
