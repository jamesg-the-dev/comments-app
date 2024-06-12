import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SentCommentComponent } from './sent-comment.component';

describe('SentCommentComponent', () => {
  let component: SentCommentComponent;
  let fixture: ComponentFixture<SentCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SentCommentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SentCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
