import { Component } from '@angular/core';
import { HuggingchatService } from './huggingchat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'huggingchat-integration';
  response: any;
  message: string = '';  // Property bound to the input field

  constructor(private huggingChatService: HuggingchatService) { }


  sendMessage(): void {
    this.huggingChatService.sendMessage(this.message).subscribe(
      res => {
        this.response = res[0].generated_text;
        console.log(res);
        this.message = '';  // Clear the input field
      },
      err => {
        console.error('Error occurred:', err);
      }
    );
  }
}
