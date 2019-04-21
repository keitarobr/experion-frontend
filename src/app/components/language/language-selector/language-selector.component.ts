import { Component, OnInit, EventEmitter, Output, Input, forwardRef } from '@angular/core';
import { LanguageService } from '../../../services/language.service';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Language } from '../../../services/language';

@Component({
  selector: 'exp-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.sass'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => LanguageSelectorComponent),
    }
  ]
})
export class LanguageSelectorComponent implements OnInit, ControlValueAccessor {

  private _selectedLanguage: Language;
  changeListeners: any[] = [];

  @Input() get value() { return this._selectedLanguage; }
  set value(value: Language) {
    this._selectedLanguage = value;
    this.valueChange.emit(value);
    this.changeListeners.forEach((listener) => listener(value));
  }
  @Output() valueChange = new EventEmitter();

  constructor(private languageService: LanguageService) { }

  ngOnInit() {
  }

  registerOnChange(fn: any): void {
    this.changeListeners.push(fn);
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState(isDisabled: boolean): void {
  }

  writeValue(obj: any): void {
    this._selectedLanguage = obj;
    this.valueChange.emit(obj);
  }


}
