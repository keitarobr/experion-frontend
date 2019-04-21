import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ExpertControllerService } from 'src/app/api/services';
import { Observable } from 'rxjs';
import { PhysicalEvidence, Expert, EvidenceSourceInput } from 'src/app/api/models';

@Component({
  selector: 'exp-expert-evidence-input',
  templateUrl: './expert-evidence-input.component.html',
  styleUrls: ['./expert-evidence-input.component.sass']
})
export class ExpertEvidenceInputComponent implements OnInit {


  private evidences: PhysicalEvidence[];
  private _expert: Expert;
  private _inputs: EvidenceSourceInput[];
  private page = 1;
  private pageSize = 10;



  @Input() set expert(value: Expert) {
    this._expert = value;
    this.reloadEvidences();
  }

  @Input() set inputs(value: EvidenceSourceInput[]) {
    this._inputs = value;
    this.reloadEvidences();
  }

  constructor(private expertService: ExpertControllerService) { }

  ngOnInit() {
  }

  reloadEvidences() {
    console.log("ExpertEvidenceInputComponent->reloadEvidences(" + JSON.stringify(this._expert) + "," + JSON.stringify(this._inputs) + ")");
    if (this._expert && this._inputs && this._inputs.length > 0) {
      console.log("Searching in inputs: ");
      console.log(this._inputs);
      this.expertService.listEvidencesByInputsUsingGET({ inputNames: this._inputs.map(input => input.name), expertIdentification: this._expert.identification }).subscribe(evidences => {
        this.evidences = evidences;
        this.page = 1;
      });
    } else if (this._expert) {
      this.expertService.listAllCollectedEvidencesUsingGET(this._expert.identification).subscribe(evidences => {
        this.evidences = evidences;
        this.page = 1;
      });
    } else {
      this.evidences = [];
      this.page = 1;
    }
  }

  evidencePage() {
    if (this.evidences) {
      return this.evidences
        .map((evidence, i) => ({ id: i + 1, ...evidence }))
        .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
    } else {
      return [];
    }
  }

}
