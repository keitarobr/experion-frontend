import { Component, OnInit, forwardRef, Input, Output, EventEmitter } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Observable } from 'rxjs';
import { ExpertiseControllerService } from 'src/app/api/services';
import { ExpertiseBuilder } from 'src/app/api/models';

@Component({
  selector: 'exp-expertise-generator-selector',
  templateUrl: './expertise-generator-selector.component.html',
  styleUrls: ['./expertise-generator-selector.component.sass'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => ExpertiseGeneratorSelectorComponent),
    }
  ]
})
export class ExpertiseGeneratorSelectorComponent implements OnInit, ControlValueAccessor {

  _selectedGenerator: ExpertiseBuilder;
  
  @Input() get value() { return this._selectedGenerator; }
  set value(value: ExpertiseBuilder) {
    this._selectedGenerator = value;
    this.valueChange.emit(value);
    this.changeListeners.forEach((listener) => listener(value));
  }
  @Output() valueChange = new EventEmitter();
  
  generators$: Observable<ExpertiseBuilder[]>;
  changeListeners: any[] = [];

  constructor(private generatorService: ExpertiseControllerService) { }

  ngOnInit() {
    this.generators$ = this.generatorService.findAllExpertiseBuilderUsingGET();
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
