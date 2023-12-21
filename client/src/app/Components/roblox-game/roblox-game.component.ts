import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-roblox-game',
  templateUrl: './roblox-game.component.html',
  styleUrls: ['./roblox-game.component.scss']
})

export class RobloxGameComponent {
  @Input() gameThumbnail: string | undefined;
  @Input() gameTitle: string | undefined;
  @Input() gameURL: string | undefined;
}


