import { Component, OnInit, ViewChild } from '@angular/core';
import { Expert, EvidenceSource } from 'src/app/api/models';
import { InputControllerService } from 'src/app/api/services';

@Component({
  selector: 'exp-source-find-expert',
  templateUrl: './source-find-expert.component.html',
  styleUrls: ['./source-find-expert.component.sass']
})
export class SourceFindExpertComponent implements OnInit {

  selectedSource: EvidenceSource;
  expertName: string = '';
  page = 1;
  pageSize = 10;
  experts: Expert[];

  constructor(private sourceService: InputControllerService) { }

  ngOnInit() {
  }

  expertsPage() {
    if (this.experts) {
      return this.experts
        .map((expert, i) => ({ id: i + 1, ...expert }))
        .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
    } else {
      return [];
    }
  }

  update(expertValue: string) {
    this.expertName = expertValue;
  }

  findExperts() {
    console.log(this.selectedSource);
    this.sourceService.findExpertByNameUsingGET({ inputName: this.selectedSource.name, expertName: this.expertName }).subscribe((experts) => {
      this.page = 1;
      this.experts = experts;
    }
    );
  }

}
