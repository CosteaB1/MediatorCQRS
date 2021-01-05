import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { IUser, IUserUpdate } from 'src/app/interfaces/user.interface';
import { HttpClientComponent } from '../http-client.component';
import { UserService } from '../user.service';

@Component({
  selector: 'app-http-edit',
  templateUrl: './http-edit.component.html',
  styleUrls: ['./http-edit.component.scss']
})
export class HttpEditComponent implements OnInit {
  user: IUser;
  userValidation: FormGroup;

  constructor(public dialogRef: MatDialogRef<HttpClientComponent>, private userService: UserService) {

  }

  ngOnInit(): void {
    this.userValidation = new FormGroup({
      firstName: new FormControl(`${this.user.firstName}`, [
        Validators.required
      ]),
      lastName: new FormControl(`${this.user.lastName}`, [
        Validators.required
      ]),
      age: new FormControl(`${this.user.age}`, [
        Validators.required
      ]),
      discount: new FormControl(`${this.user.discount}`, [
        Validators.required
      ])
    });
    console.log(this.user);
  }

  submit(): void {
    if (this.userValidation.invalid) {
      this.buttonSubmit();
    }
    else {
      const userUpdate: IUserUpdate = {
        firstName: this.userValidation.value.firstName,
        lastName: this.userValidation.value.lastName,
        email: this.userValidation.value.email,
        age: +this.userValidation.value.age,
        discount: +this.userValidation.value.discount,
        identityId: this.userValidation.value.identityId,
        phoneNumber: this.userValidation.value.phoneNumber
      };
      this.dialogRef.close();
      console.log('Afeter', this.user);
      this.userService.updateUser(this.user.id, userUpdate).subscribe(response => {
        console.log('Put', response);
      });
    }

  }
  buttonSubmit(): void {
    this.userValidation.markAllAsTouched();
  }

}
