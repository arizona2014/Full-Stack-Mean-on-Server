import { Message } from './message.model';

export class MessageService {

	private messages : Message[] = [];

	addMessage(message: Message){
		this.messages.push(message);
	}
	
	getMessages(){
		return this.messages;
	}

	deleteMessage(message: Message){
		this.messages.splice(this.messages.indexOf(message));
	}

	
}