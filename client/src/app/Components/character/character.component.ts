import { Component, Input, OnInit } from '@angular/core';
import { ListService } from '../../Services/global-list.service';
@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {
  @Input() HeadFile!: string;
  @Input() LeftArmFile!: string;
  @Input() RightArmFile!: string;
  @Input() LeftLegFile!: string;
  @Input() RightLegFile!: string;
  @Input() TorsoFile!: string;

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

  updateCharacter(): void{
    this.getList();
  }

  ngOnInit(): void {
    this.HeadFile = "./assets/AvatarItems/Heads/TemplateHead.png";
    this.LeftArmFile = "./assets/AvatarItems/Left_Arms/TemplateArm.png";
    this.RightArmFile = "./assets/AvatarItems/Right_Arms/TemplateArm.png";
    this.LeftLegFile = "./assets/AvatarItems/Left_Legs/TemplateLeg.png";
    this.RightLegFile = "./assets/AvatarItems/Right_Legs/TemplateLeg.png";
    this.TorsoFile = "./assets/AvatarItems/Torsos/TemplateTorso.png";
  }
}
