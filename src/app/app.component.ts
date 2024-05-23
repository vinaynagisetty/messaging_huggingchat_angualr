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

  constructor(private huggingChatService: HuggingchatService) { }


  sendMessage(message: string): void {
    this.huggingChatService.sendMessage(message).subscribe(
      res => {
        this.response = res[0].generated_text;
        console.log(res);
      },
      err => {
        console.error('Error occurred:', err);
      }
    );
  }
}
