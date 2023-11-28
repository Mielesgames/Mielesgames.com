import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sans',
  templateUrl: './sans.component.html',
  styleUrls: ['./sans.component.scss']
})
export class SansComponent {
    @Input() pose!: number;

    ChangePos(value: number) {
      this.pose = value;
      console.log(value)

    }
}
