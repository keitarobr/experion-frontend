import { Component, OnInit, ViewChild } from '@angular/core';
import { Expert } from 'src/app/api/models';
import { ExpertControllerService } from 'src/app/api/services';

@Component({
  selector: 'exp-expert-find-all',
  templateUrl: './expert-find-all.component.html',
  styleUrls: ['./expert-find-all.component.sass']
})
export class ExpertFindAllComponent implements OnInit {

  applyFilter(filter: string) {
    this.filter = filter;
  }

  page = 1;
  experts: Expert[];
  pageSize = 10;
  filter = "";

  constructor(private expertService: ExpertControllerService) { }

  reload() {
    this.expertService.findAllUsingGET().subscribe((experts) => {
      this.experts = experts;
      this.page = 1;
    }
    );
  }

  ngOnInit() {
    this.reload();
  }

  expertsPage() {
    if (this.experts) {
      return this.experts.filter(expert => expert.name.toLowerCase().indexOf(this.filter) != -1)
        .map((expert, i) => ({ id: i + 1, ...expert }))
        .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
    } else {
      return [];
    }
  }

}
