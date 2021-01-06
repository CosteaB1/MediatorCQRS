import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IUser } from 'src/app/interfaces/user.interface';
import { UserService } from '../http-client/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user: IUser;

  constructor(private rout: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    // this.user = this.rout.snapshot.data.userId;

    this.rout.data.subscribe(data => {
      this.user = data.userId;
    });
    // this.rout.params.subscribe((params: Params) => {
    //   console.log(params);
    //   this.userService.getById(+params.id).subscribe(response => {
    //     this.user = response;
    //     console.log('User', this.user);
    //   });
    // });
  }


}
