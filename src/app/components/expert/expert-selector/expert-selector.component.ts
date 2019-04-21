import {Component, EventEmitter, forwardRef, Input, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {Observable, ReplaySubject, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR} from '@angular/forms';
import { Expert } from 'src/app/api/models';
import { ExpertControllerService } from 'src/app/api/services';

@Component({
  selector: 'exp-expert-selector',
  templateUrl: './expert-selector.component.html',
  styleUrls: ['./expert-selector.component.sass'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => ExpertSelectorComponent),
    }
  ]
})
export class ExpertSelectorComponent implements OnInit, OnDestroy, ControlValueAccessor {

  // expertFilter: FormControl = new FormControl();
  private _selectedExpert: Expert;
  changeListeners: any[] = [];

  @Input() get value() { return this._selectedExpert; }
  set value(value: Expert) {    
    this._selectedExpert = value;
    this.valueChange.emit(value);
    this.changeListeners.forEach((listener) => listener(value));
  }
  @Output() valueChange = new EventEmitter();

  experts$: Observable<Expert[]>;
  experts: Expert[];
  filteredExperts: ReplaySubject<Expert[]> = new ReplaySubject<Expert[]>(1);

  /** Subject that emits when the component has been destroyed. */
  protected _onDestroy = new Subject<void>();

  constructor(private expertService: ExpertControllerService) { }

  ngOnInit() {
    this.experts$ = this.expertService.findAllUsingGET();

    this.experts$.subscribe((experts) => {
      this.experts = experts;
      this.filteredExperts.next(experts);
    });

    // this.expertFilter.valueChanges
    //   .pipe(takeUntil(this._onDestroy))
    //   .subscribe(() => {
    //     this.filterExperts();
    //   });

  }

  ngOnDestroy(): void {
    this._onDestroy.next();
    this._onDestroy.complete();
  }

  // protected filterExperts() {
  //   if (! this.experts) {
  //     return;
  //   }

  //   // get the search keyword
  //   let search = this.expertFilter.value;
  //   if (!search) {
  //     this.filteredExperts.next(this.experts);
  //     return;
  //   } else {
  //     search = search.toLowerCase();
  //   }
  //   // filter the banks
  //   this.filteredExperts.next(
  //     this.experts.filter(expert => expert.name.toLowerCase().indexOf(search) > -1)
  //   );
  // }

  registerOnChange(fn: any): void {
    this.changeListeners.push(fn);    
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState(isDisabled: boolean): void {
  }

  writeValue(obj: any): void {
    this._selectedExpert = obj;
    this.valueChange.emit(obj);
  }

  // expertChanged() {
  //   this.valueChange.emit(this._selectedExpert);
  // }

}
