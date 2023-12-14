import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubevideoComponent } from './youtubevideo.component';

describe('YoutubevideoComponent', () => {
  let component: YoutubevideoComponent;
  let fixture: ComponentFixture<YoutubevideoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YoutubevideoComponent]
    });
    fixture = TestBed.createComponent(YoutubevideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
