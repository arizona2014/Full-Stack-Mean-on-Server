import {Component, OnInit} from "@angular/core";
import {FormGroup, FormControl, Validators} from "@angular/forms";
@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html'
})
export class SignupComponent implements OnInit {

    myForm: FormGroup;

    onSubmit(){
        console.log(this.myForm);
        this.myForm.reset();
    }

    ngOnInit(){
        this.myForm = new FormGroup({
            firstName: new FormControl(null, Validators.required),
            lastName: new FormControl(null, Validators.required),
            email: new FormControl(null, [
                Validators.required,
                Validators.pattern("[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$")
            ]),
            password: new FormControl(null, Validators.required),
        });
    }

}