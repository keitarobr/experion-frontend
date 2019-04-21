import {Component, EventEmitter, forwardRef, Input, OnInit, Output} from '@angular/core';
import {Observable, ReplaySubject, Subject} from 'rxjs';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import { EvidenceSource, Expert } from 'src/app/api/models';
import { SourceControllerService } from 'src/app/api/services';

@Component({
  selector: 'exp-source-selector',
  templateUrl: './source-selector.component.html',
  styleUrls: ['./source-selector.component.sass'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => SourceSelectorComponent),
    }
  ]
})
export class SourceSelectorComponent implements OnInit, ControlValueAccessor {

  _selectedSource: EvidenceSource;
  @Input() get value() { return this._selectedSource; }
  set value(value: Expert) {
    this._selectedSource = value;
    this.valueChange.emit(value);
    this.changeListeners.forEach((listener) => listener(value));
  }
  @Output() valueChange = new EventEmitter();
  sources$: Observable<EvidenceSource[]>;
  changeListeners: any[] = [];

  constructor(private sourceService: SourceControllerService) { }

  ngOnInit() {
    this.sources$ = this.sourceService.listSourcesUsingGET();
  }

  registerOnChange(fn: any): void {
    this.changeListeners.push(fn);
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState(isDisabled: boolean): void {
  }

  writeValue(obj: any): void {
    this._selectedSource   = obj;
    this.valueChange.emit(obj);
  }

}
