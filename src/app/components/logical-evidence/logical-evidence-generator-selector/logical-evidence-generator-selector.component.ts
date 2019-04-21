import { Component, OnInit, forwardRef, Input, Output, EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { Observable } from 'rxjs';
import { LogicalEvidenceControllerService } from 'src/app/api/services';
import { LogicalEvidenceBuilder } from 'src/app/api/models';

@Component({
  selector: 'exp-logical-evidence-generator-selector',
  templateUrl: './logical-evidence-generator-selector.component.html',
  styleUrls: ['./logical-evidence-generator-selector.component.sass'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => LogicalEvidenceGeneratorSelectorComponent),
    }
  ]
})
export class LogicalEvidenceGeneratorSelectorComponent implements OnInit, ControlValueAccessor {

  _selectedGenerator: LogicalEvidenceBuilder;
  
  @Input() get value() { return this._selectedGenerator; }
  set value(value: LogicalEvidenceBuilder) {
    this._selectedGenerator = value;
    this.valueChange.emit(value);
    this.changeListeners.forEach((listener) => listener(value));
  }
  @Output() valueChange = new EventEmitter();
  
  generators$: Observable<LogicalEvidenceBuilder[]>;
  changeListeners: any[] = [];

  constructor(private generatorService: LogicalEvidenceControllerService) { }

  ngOnInit() {
    this.generators$ = this.generatorService.listLogicalEvidenceBuildersUsingGET();
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
