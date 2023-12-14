import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RobloxGameComponent } from './roblox-game.component';

describe('RobloxGameComponent', () => {
  let component: RobloxGameComponent;
  let fixture: ComponentFixture<RobloxGameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RobloxGameComponent]
    });
    fixture = TestBed.createComponent(RobloxGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
