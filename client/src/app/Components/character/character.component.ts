import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent {
  @Input() HeadID!: number;
  @Input() LeftArmID!: number;
  @Input() RightArmID!: number;
  @Input() LeftLegID!: number;
  @Input() RightLegID!: number;
}
