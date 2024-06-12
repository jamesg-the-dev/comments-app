import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import type { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-icon-button',
  standalone: true,
  imports: [ButtonComponent, FontAwesomeModule],
  templateUrl: './icon-button.component.html',
  styleUrl: './icon-button.component.scss',
})
export class IconButtonComponent {
  @Input() icon: IconDefinition;
}
