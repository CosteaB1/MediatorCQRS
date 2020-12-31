import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

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
      ),
      multipleSelect: new FormControl('',
        Validators.required
      ),
      object: new FormGroup({
        groupObject1: new FormControl('',
          [
            Validators.required,
          ]),
        groupObject2: new FormControl('', [
          Validators.required
        ])
      }),
      skills: new FormArray([])
    });
  }
  submit(): void {
    if (this.formValidationTest.valid) {
      console.log('Form: ', this.formValidationTest);
      const formData = { ...this.formValidationTest.value };
      console.log('Form Data : ', formData);
    }
  }
  buttonSubmit(): void {
    this.formValidationTest.markAllAsTouched();
  }
  addSkill(): any {
    const control = new FormControl('', Validators.required);
    (this.formValidationTest.get('skills') as FormArray).push(control);
  }

}
