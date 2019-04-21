import { Component, OnInit, forwardRef, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { Observable } from 'rxjs';
import { InputControllerService } from 'src/app/api/services';
import { EvidenceSourceInput } from 'src/app/api/models';

@Component({
  selector: 'exp-input-selector-multiple',
  templateUrl: './input-selector-multiple.component.html',
  styleUrls: ['./input-selector-multiple.component.sass'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => InputSelectorMultipleComponent),
    }
  ]
}) export class InputSelectorMultipleComponent implements OnInit, ControlValueAccessor {

  _selectedInputs: EvidenceSourceInput[];

  @Input() get value() { return this._selectedInputs; }
  set value(value: EvidenceSourceInput[]) {
    this._selectedInputs = value;
    this.valueChange.emit(value);
    this.changeListeners.forEach((listener) => listener(value));
  }
  @Output() valueChange = new EventEmitter();
  @ViewChild('list') list: HTMLSelectElement;

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
    this._selectedInputs = obj;
    this.valueChange.emit(obj);
  }

}
