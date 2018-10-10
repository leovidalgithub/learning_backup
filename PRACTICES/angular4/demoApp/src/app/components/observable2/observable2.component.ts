import { Component, OnInit } from '@angular/core';
import { Service1Service } from '../../services/service1.service';

@Component({
  selector: 'app-observable2',
  templateUrl: './observable2.component.html',
  styleUrls: ['./observable2.component.scss']
})
export class Observable2Component {

  constructor(private messageService: Service1Service) { }

  sendMessage(): void {
    this.messageService.sendMessage('Message from Observable2 to Observable1 through Service1');
  }

  clearMessage(): void {
    this.messageService.clearMessage();
  }
}
