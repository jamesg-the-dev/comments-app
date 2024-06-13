import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { IconButtonComponent } from '../icon-button/icon-button.component';

@Component({
  selector: 'app-vote-controls',
  standalone: true,
  imports: [IconButtonComponent],
  templateUrl: './vote-controls.component.html',
  styleUrl: './vote-controls.component.scss',
})
export class VoteControlsComponent {
  @Output() increased = new EventEmitter<void>();
  @Output() decreased = new EventEmitter<void>();
  @Input() count: number = 0; //todo this should be in a service or redux state or something
  @Input() orientation: 'vertical' | 'horizontal' = 'vertical';

  faPlus = faPlus;
  faMinus = faMinus;

  increase() {
    this.increased.emit();
  }

  decrease() {
    this.decreased.emit();
  }
}
