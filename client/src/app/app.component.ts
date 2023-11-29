import { Component } from '@angular/core';
import { ListService } from './Services/global-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Website';
  globalList: any[];

  constructor(private listService: ListService) {
    this.globalList = listService.getGlobalList();
  }
}
