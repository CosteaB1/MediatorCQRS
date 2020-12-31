import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.scss']
})
export class FormValidationComponent implements OnInit {

  formValidationTest: FormGroup;

  ngOnInit(): void {
    this.formValidationTest = new FormGroup({
      textTest: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(20)
      ]),
      text2: new FormControl('',
        Validators.required
      )
    });
  }
  submit(): void {
    if (this.formValidationTest.valid) {
      console.log('Form: ', this.formValidationTest);
      const formData = { ...this.formValidationTest.value };
      console.log('Form Data : ', formData);
    }
  }

}
