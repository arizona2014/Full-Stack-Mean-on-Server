import {Component} from "@angular/core";

@Component({
    selector: 'app-message-input',
    templateUrl: './message-input.component.html'
})

export class MessageInputComponent {

    onSave(value: String){
        console.log(value)
    }

}