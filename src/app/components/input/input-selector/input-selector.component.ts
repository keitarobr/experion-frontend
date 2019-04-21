import { Component, OnInit, forwardRef, Input, Output, EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { Observable } from 'rxjs';
import { InputControllerService } from 'src/app/api/services';
import { EvidenceSourceInput } from 'src/app/api/models';

@Component({
  selector: 'exp-input-selector',
  templateUrl: './input-selector.component.html',
  styleUrls: ['./input-selector.component.sass'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => InputSelectorComponent),
    }
  ]
})
export class InputSelectorComponent implements OnInit, ControlValueAccessor {

  _selectedInput: EvidenceSourceInput;
  
  @Input() get value() { return this._selectedInput; }
  set value(value: EvidenceSourceInput) {
    this._selectedInput = value;
    this.valueChange.emit(value);
    this.changeListeners.forEach((listener) => listener(value));
  }
  @Output() valueChange = new EventEmitter();
  
  inputs$: Observable<EvidenceSourceInput[]>;
  changeListeners: any[] = [];

  constructor(private inputService: InputControllerService) { }

  ngOnInit() {
    this.inputs$ = this.inputService.findAllUsingGET1();
  }

  registerOnChange(fn: any): void {
    this.changeListeners.push(fn);
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState(isDisabled: boolean): void {
  }

  writeValue(obj: any): void {
    this._selectedInput   = obj;
    this.valueChange.emit(obj);
  }

}
