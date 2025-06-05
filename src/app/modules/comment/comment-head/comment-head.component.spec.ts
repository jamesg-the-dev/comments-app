import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentHeadComponent } from './comment-head.component';

describe('CommentHeadComponent', () => {
  let component: CommentHeadComponent;
  let fixture: ComponentFixture<CommentHeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommentHeadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CommentHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
