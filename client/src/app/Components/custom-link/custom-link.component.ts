import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-link',
  templateUrl: './custom-link.component.html',
  styleUrls: ['./custom-link.component.scss']
})
export class CustomLinkComponent {
  @Input() WebsiteURL: string | undefined;
  @Input() WebsiteName: string | undefined;
  @Input() WebsiteIcon: string | undefined;
  @Input() CreatorName: string | undefined;
  @Input() CreatorUrl: string | undefined;
  @Input() CreatorPfp: string | undefined;
}
