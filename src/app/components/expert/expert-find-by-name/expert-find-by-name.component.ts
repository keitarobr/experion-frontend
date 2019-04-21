import {Component, OnInit, ViewChild} from '@angular/core';
import {ExpertFindAllComponent} from '../expert-find-all/expert-find-all.component';

@Component({
  selector: 'exp-expert-find-by-name',
  templateUrl: './expert-find-by-name.component.html',
  styleUrls: ['./expert-find-by-name.component.sass']
})
export class ExpertFindByNameComponent implements OnInit {

  @ViewChild('expertList') expertListComponent: ExpertFindAllComponent;

  constructor() { }

  ngOnInit() {

  }

  applyFilter(filterValue: string) {
    this.expertListComponent.applyFilter(filterValue.trim().toLowerCase());
  }

  reload() {
    this.expertListComponent.reload();
  }
}
