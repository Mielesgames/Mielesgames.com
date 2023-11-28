import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FnafComponent } from './fnaf.component';

describe('FnafComponent', () => {
  let component: FnafComponent;
  let fixture: ComponentFixture<FnafComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FnafComponent]
    });
    fixture = TestBed.createComponent(FnafComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
