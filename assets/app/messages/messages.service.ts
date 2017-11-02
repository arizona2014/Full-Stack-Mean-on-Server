import 'Message' from './message.model';

export class MessageService {

	private messages : Message[] = [];

	addMessage(message: Message){
		this.messages.push(message);
	}
	
	getMessages(){
		return this.messages;
	}
	
}