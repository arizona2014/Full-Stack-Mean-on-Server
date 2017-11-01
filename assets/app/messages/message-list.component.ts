import { Component } from "@angular/core";
import { Message } from "./message.model";


@Component({
    selector: 'app-message-list',
    template: `
        <div class=".col-md-8 col-md-offset-2">
            <app-message
                    [message]="message"
                    (editClicked)="message.content = $event"
                    *ngFor="let message of messages"
            >
            </app-message>
        </div>        
    `
})
export class MessageListComponent {

    messages: Message[] = [
        new Message('First message', 'Andy'),
        new Message('Also first message', 'Yasmi'),
        new Message('Another first message', 'Ela')
    ];

}