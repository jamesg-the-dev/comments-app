import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-badge',
  standalone: true,
  template: `<div
    class="text-white px-2 rounded-sm text-sm"
    [style.backgroundColor]="color"
  >
    {{ text }}
  </div> `,
})
export class BadgeComponent {
  @Input() text: string;

  //TODO I don't really like this. I'd like to centralise this somehow. I attempted grabbing color them from tailwind config but it didn't work.
  @Input() color: string = 'hsl(238, 40%, 52%)';
}
