import {
  Component,
  ElementRef,
  forwardRef,
  Input,
  ViewChild,
} from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-textbox',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './textbox.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextboxComponent),
      multi: true,
    },
  ],
})
export class TextboxComponent implements ControlValueAccessor {
  @ViewChild('input') input: ElementRef<HTMLTextAreaElement>;

  @Input() textareaId: string;
  @Input() textareaName: string;
  @Input() placeholder: string;
  @Input() rows: number;
  @Input() cols: number;
  @Input() disabled: boolean;
  @Input() required: boolean;
  @Input() readonly: boolean;
  @Input() ariaDescribedBy: string;

  value: string = '';

  onChange = (value: string) => {};
  onTouched = () => {};

  writeValue(value: string): void {
    this.value = value || '';
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  focus() {
    this.input.nativeElement.focus();
  }

  handleInput(event: Event): void {
    const target = event.target as HTMLTextAreaElement;
    this.value = target.value;
    this.onChange(this.value);
  }
}
