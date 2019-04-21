import { Component, OnInit, Input } from '@angular/core';
import { DownloadeableExpertiseDescription, Expert } from 'src/app/api/models';
import { Observable } from 'rxjs';
import { ExpertiseControllerService } from 'src/app/api/services';

@Component({
  selector: 'exp-expertise-details',
  templateUrl: './expertise-details.component.html',
  styleUrls: ['./expertise-details.component.sass']
})
export class ExpertiseDetailsComponent implements OnInit {

  private expertiseDetails: Observable<DownloadeableExpertiseDescription>;

  private _expertiseId: number;  

  @Input() set expertiseId(value: number) {
    this._expertiseId = value;
    this.reloadExpertiseDescription();
  }

  download() {
    this.expertiseDetails.subscribe(details => {
      const blob = new Blob([JSON.stringify(details)], { type: 'application/json' });
      const url= window.URL.createObjectURL(blob);
      window.open(url);

    });

  }

  constructor(private expertiseService: ExpertiseControllerService) { }

  reloadExpertiseDescription() {    
    if (this._expertiseId) {
      console.log("ExpertExpertiseAllComponent->reloadExpertiseDescriptionFull(" + JSON.stringify(this._expertiseId)+")");
      this.expertiseDetails = this.expertiseService.downloadExpertiseDescriptionUsingGET(this._expertiseId);
    } else {
      console.log("ExpertExpertiseAllComponent->reloadExpertiseDescription()");
      this.expertiseDetails = null;
    }
  }
  
  ngOnInit() {
  }

}
