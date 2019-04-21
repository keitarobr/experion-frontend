import { Component, OnInit, forwardRef, Input, Output, EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { Observable } from 'rxjs';
import { ProfileControllerService } from 'src/app/api/services';
import { ProfileBuilder } from 'src/app/api/models';

@Component({
  selector: 'exp-profile-generator-selector',
  templateUrl: './profile-generator-selector.component.html',
  styleUrls: ['./profile-generator-selector.component.sass'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => ProfileGeneratorSelectorComponent),
    }
  ]
})
export class ProfileGeneratorSelectorComponent implements OnInit, ControlValueAccessor {

  _selectedGenerator: ProfileBuilder;
  
  @Input() get value() { return this._selectedGenerator; }
  set value(value: ProfileBuilder) {
    this._selectedGenerator = value;
    this.valueChange.emit(value);
    this.changeListeners.forEach((listener) => listener(value));
  }
  @Output() valueChange = new EventEmitter();
  
  generators$: Observable<ProfileBuilder[]>;
  changeListeners: any[] = [];

  constructor(private generatorService: ProfileControllerService) { }

  ngOnInit() {
    this.generators$ = this.generatorService.listProfileBuildersUsingGET();
  }

  registerOnChange(fn: any): void {
    this.changeListeners.push(fn);
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState(isDisabled: boolean): void {
  }

  writeValue(obj: any): void {
    this._selectedGenerator   = obj;
    this.valueChange.emit(obj);
  }

}
