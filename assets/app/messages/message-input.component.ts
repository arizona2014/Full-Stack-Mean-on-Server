import {Component} from "@angular/core";
import {MessageService} from "./messages.service";
import {Message} from "./message.model";

@Component({
    selector: 'app-message-input',
    templateUrl: './message-input.component.html'
})

export class MessageInputComponent {

    constructor (private messageService: MessageService){ }

    onSave(value: String){
        const message = new Message(value,'Andy');
        this.messageService.addMessage(message);
    }

}