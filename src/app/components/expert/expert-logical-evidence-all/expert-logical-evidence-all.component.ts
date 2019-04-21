import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { LogicalEvidenceControllerService } from 'src/app/api/services';
import { LogicalEvidence, Expert } from 'src/app/api/models';

@Component({
  selector: 'exp-expert-logical-evidence-all',
  templateUrl: './expert-logical-evidence-all.component.html',
  styleUrls: ['./expert-logical-evidence-all.component.sass']
})
export class ExpertLogicalEvidenceAllComponent implements OnInit {

  evidences: LogicalEvidence[];
  private _expert: Expert;
  page = 1;
  pageSize = 10;

  @Input() set expert(value: Expert) {
    this._expert = value;
    this.reloadEvidences();
  }

  constructor(private logicalEvidenceService: LogicalEvidenceControllerService) { }

  ngOnInit() {
  }

  evidencesPage() {
    if (this.evidences) {
      return this.evidences
        .map((evidence, i) => ({ id: i + 1, ...evidence }))
        .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
    } else {
      return [];
    }
  }

  reloadEvidences() {
    // console.log("ExpertLogicalEvidenceAllComponent->reloadEvidences(" + JSON.stringify(this._expert)+")");
    if (this._expert) {
      this.logicalEvidenceService.listLogicalEvidencesUsingGET(this._expert.identification).subscribe(evidences => {        
        evidences.forEach(evidence => {
          let allInputs = evidence.physicalEvidences.map(pEvidence => pEvidence.input.name);
          (evidence as any).inputs = allInputs.filter(function (item, pos) {
            return allInputs.indexOf(item) == pos;
          }).join(", ");
          let keywordsArrays = evidence.physicalEvidences.map(pEvidence => pEvidence.keywords);
          let keywords = []
          keywordsArrays.forEach(array => keywords.push(array));


          (evidence as any).fullData = keywords.filter(function (item, pos) {
            return keywords.indexOf(item) == pos;
          }).join(", ");
        })
        this.page = 1;
        this.evidences = evidences;
      });
    } else {
      this.evidences = [];
      this.page = 1;
    }
  }

}
