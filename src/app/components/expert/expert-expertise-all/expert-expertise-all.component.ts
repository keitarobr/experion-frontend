import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { ExpertiseControllerService } from 'src/app/api/services';
import { Expertise, Expert } from 'src/app/api/models';

@Component({
  selector: 'exp-expert-expertise-all',
  templateUrl: './expert-expertise-all.component.html',
  styleUrls: ['./expert-expertise-all.component.sass']
})
export class ExpertExpertiseAllComponent implements OnInit {

  private expertises: Observable<Expertise[]>;  
  private _expert: Expert;  

  @Input() set expert(value: Expert) {
    this._expert = value;
    this.reloadExpertise();
  }
  
  constructor(private expertiseService: ExpertiseControllerService) { }

  ngOnInit() {
  }

  reloadExpertise() {
    if (this._expert) {
      this.expertises = this.expertiseService.findAllExpertiseUsingPOST(this._expert.identification);
    } else {
      this.expertises = null;
    }
  }

}
