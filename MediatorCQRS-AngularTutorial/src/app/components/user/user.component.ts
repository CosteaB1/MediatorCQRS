import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { threadId } from 'worker_threads';
import { UserService } from '../http-client/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private rout: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    this.rout.params.subscribe((params: Params) => {
      console.log(params);
      this.userService.getById(params.id).subscribe((response) => {
        console.log('Response', response);
      });
    });
  }
}
