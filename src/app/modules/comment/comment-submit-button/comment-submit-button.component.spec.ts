import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReplyButtonComponent } from '../../../components/reply-button/reply-button.component';

describe('ReplyButtonComponent', () => {
  let component: ReplyButtonComponent;
  let fixture: ComponentFixture<ReplyButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReplyButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ReplyButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
