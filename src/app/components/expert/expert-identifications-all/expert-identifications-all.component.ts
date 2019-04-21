import {Component, Input, OnInit, ViewChild} from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Expert, ExpertSourceIdentification } from 'src/app/api/models';
import { ExpertControllerService } from 'src/app/api/services';

@Component({
  selector: 'exp-expert-identifications',
  templateUrl: './expert-identifications-all.component.html',
  styleUrls: ['./expert-identifications-all.component.sass']
})
export class ExpertIdentificationsAllComponent implements OnInit {
  ids: ExpertSourceIdentification[];

  constructor(private expertService : ExpertControllerService, private flashService : FlashMessagesService) { }
  
  private _expert: Expert;

  @Input('expert') set expert(expert: Expert) {
    this._expert = expert;
    if (expert) {
      this.reload(expert.identifications);
    } else {
      this.reload([]);
    }
  }

  reload(ids: ExpertSourceIdentification[]) {
    console.log(ids);
     this.ids = ids;
  }

  ngOnInit() {

  }

  deleteIdentification(identification: ExpertSourceIdentification) {

    this.flashService.show(`Deleting identification ${identification.identification} for ${this._expert.name} in ${identification.source.name}`, { cssClass: 'alert-info'});
    console.log(identification);
    console.log(this._expert);

    this.expertService.deleteExpertIdentificationUsingPOST({sourceName: identification.source.name, identification: identification.identification, expertIdentification: this._expert.identification}).subscribe(result =>
      {this.flashService.show(`Deleted identification ${identification.identification} for ${this._expert.name} in ${identification.source.name}`, { cssClass: 'alert-success'});
      this.reload(result.identifications);
    }
    );



  }

}
