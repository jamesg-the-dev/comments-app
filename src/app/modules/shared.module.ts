import { NgModule } from '@angular/core';
import { TextboxComponent } from '../components/textbox/textbox.component';
import { BadgeComponent } from '../components/badge/badge.component';
import { ButtonComponent } from '../components/button/button.component';

@NgModule({
  imports: [TextboxComponent, BadgeComponent, ButtonComponent],
  exports: [TextboxComponent, BadgeComponent, ButtonComponent],
})
export class SharedModule {}
