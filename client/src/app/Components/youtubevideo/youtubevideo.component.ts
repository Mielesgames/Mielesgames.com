import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-youtubevideo',
  templateUrl: './youtubevideo.component.html',
  styleUrls: ['./youtubevideo.component.scss']
})
export class YoutubevideoComponent {
  @Input() videoTitle: string | undefined;
  @Input() videoID:string | undefined;
  @Input() publisher: string | undefined;
  @Input() channelIcon: string | undefined;
  @Input() duration: string | undefined;
  @Input() uploaderName: string | undefined;

  videoURL: string | undefined;
  videoThumbnail: string | undefined;

  ngOnChanges(changes: SimpleChanges): void {
    // Check if videoID input has changed
    if (changes['videoID']) {
      // Update properties when videoID changes
      this.videoURL = this.videoID ? `https://www.youtube.com/watch?v=${this.videoID}` : undefined;
      this.videoThumbnail = this.videoID ? `http://img.youtube.com/vi/${this.videoID}/maxresdefault.jpg` : undefined;
    }
  }
}
