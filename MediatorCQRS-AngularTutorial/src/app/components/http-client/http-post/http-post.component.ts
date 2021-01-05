import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { IUser } from 'src/app/interfaces/user.interface';
import { HttpClientComponent } from '../http-client.component';
import { UserService } from '../user.service';

@Component({
  selector: 'app-http-post',
  templateUrl: './http-post.component.html',
  styleUrls: ['./http-post.component.scss']
})
export class HttpPostComponent implements OnInit {
  userValidation: FormGroup;

  constructor(public dialogRef: MatDialogRef<HttpClientComponent>, private userService: UserService) { }

  ngOnInit(): void {
    this.userValidation = new FormGroup({
      firstName: new FormControl('', [
        Validators.required
      ]),
      lastName: new FormControl('', [
        Validators.required
      ]),
      age: new FormControl('', [
        Validators.required
      ]),
      discount: new FormControl('', [
        Validators.required
      ])
    });
  }

  submit(): void {
    if (this.userValidation.invalid) {
      this.buttonSubmit();
    }
    else {
      const user: IUser = {
        ...this.userValidation.value
      };
      this.dialogRef.close();
      console.log(user);
      this.userService.addUser(user).subscribe(response => {
        console.log('response', response);
      });
    }

  }
  buttonSubmit(): void {
    this.userValidation.markAllAsTouched();
  }
}
