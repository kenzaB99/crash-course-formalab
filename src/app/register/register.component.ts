import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms"


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public registerForm: FormGroup
  constructor(private formBuilder: FormBuilder) {
    let registerFormControls = {
      email: new FormControl("",[
        Validators.required,
        Validators.email
      ]),

      firstname: new FormControl("",[
        Validators.required,
        Validators.maxLength(30)
      ]),

      lastname: new FormControl(),
      password: new FormControl("",[
        Validators.required,
        Validators.maxLength(30)
      ]),

      confirmpassword: new FormControl("",[
        Validators.required,
        Validators.minLength(8)
      ])
    }

    this.registerForm = formBuilder.group(registerFormControls)
  }
  get email() { return this.registerForm.get('email') }
  get firstname() { return this.registerForm.get('firstname') }
  get lastname() { return this.registerForm.get('lastname') }
  get password() { return this.registerForm.get('password') }
  get confirmpassword() { return this.registerForm.get('confirmpassword') }
  


  ngOnInit(): void {
  }

  registerUser() {
    console.log(this.registerForm.value)
  }

}
