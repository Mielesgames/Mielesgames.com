import { Component, Input, OnInit } from '@angular/core';
import { ListService } from '../../Services/global-list.service';
@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {
  @Input() HeadID!: number;
  @Input() LeftArmID!: number;
  @Input() RightArmID!: number;
  @Input() LeftLegID!: number;
  @Input() RightLegID!: number;

  globalList: any[];

  constructor(private listService: ListService) {
    this.globalList = listService.getGlobalList();
  }

  addItem(): void {
    this.listService.addToGlobalList('New Item');
  }

  getList(): void {
    this.listService.getGlobalList();
  }

  ngOnInit(): void {
    var bodyParts =  [
      [], // Heads
      [], // Torsos
      [], // Left Arms
      [], // Right Arms
      [], // Left Legs
      []] // Right Legs

    
  }
}
