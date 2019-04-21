import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ExpertControllerService } from 'src/app/api/services';
import { Observable } from 'rxjs';
import { Expert, EvidenceSourceInput, PhysicalEvidence } from 'src/app/api/models';

@Component({
  selector: 'exp-expert-evidence-all',
  templateUrl: './expert-evidence-all.component.html',
  styleUrls: ['./expert-evidence-all.component.sass']
})
export class ExpertEvidenceAllComponent implements OnInit {

  private evidences: PhysicalEvidence[]; 
  private page = 1;
  private pageSize = 10;

  private _expert: Expert;
  @Input() set expert(value: Expert) {
    this._expert = value;
    this.reloadEvidences();
  }

  private _inputs: EvidenceSourceInput[];
  @Input() set inputs(value: EvidenceSourceInput[]) {
    this._inputs = value;
    this.reloadEvidences();
  }

  constructor(private expertService: ExpertControllerService) { }

  ngOnInit() { 
  }

  evidencePage() {
    return this.evidences
    .map((evidence, i) => ({id: i + 1, ...evidence}))
    .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

  reloadEvidences() {
    console.log("ExpertEvidenceAllComponent->reloadEvidences(" + JSON.stringify(this._expert)+ ")");
    if (this._expert && this._inputs && this._inputs.length > 0) {
      this.expertService.listAllCollectedEvidencesUsingGET(this._expert.identification).subscribe(evidences => {
        this.evidences = evidences;
        this.page = 1;        
      });
    }
    else if (this._expert) {
      this.expertService.listAllCollectedEvidencesUsingGET(this._expert.identification).subscribe(evidences => {
        this.evidences = evidences;
        this.page = 1;
      });
    } else {
      this.evidences = null;
      this.page = 1;
    }
  }

}
