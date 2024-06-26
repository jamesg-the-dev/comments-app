import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-textbox',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './textbox.component.html',
  styleUrl: './textbox.component.scss',
})
export class TextboxComponent implements OnInit {
  @Input() textareaId: string;
  @Input() textareaName: string;
  @Input() placeholder: string;
  @Input() rows: number;
  @Input() cols: number;
  @Input() disabled: boolean;
  @Input() required: boolean;
  @Input() readonly: boolean;
  @Input() ariaDescribedBy: string;

  @Output() valueChange = new EventEmitter<string>();

  value = new FormControl<string>('');

  ngOnInit(): void {
    this.toggleDisabled();

    this.value.valueChanges.subscribe((value) => {
      if (value) {
        this.valueChange.emit(value);
      }
    });
  }

  onInputChange(value: string) {
    this.valueChange.emit(value);
  }

  resetValue() {
    this.value.reset();
  }

  toggleDisabled() {
    if (this.disabled) {
      this.value.disable();
    } else {
      this.value.enable();
    }
  }
}
