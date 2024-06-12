import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteControlsComponent } from './vote-controls.component';

describe('VoteControlsComponent', () => {
  let component: VoteControlsComponent;
  let fixture: ComponentFixture<VoteControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VoteControlsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VoteControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
