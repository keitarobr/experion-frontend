import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ExpertControllerService} from '../../api/services';
import {FlashMessagesService} from 'angular2-flash-messages';
import { Expert } from 'src/app/api/models';
import { Source } from 'webpack-sources';
import { ExpertIdentificationsAllComponent } from 'src/app/components/expert/expert-identifications-all/expert-identifications-all.component';

@Component({
  selector: 'expert-add-identification',
  templateUrl: './expert-add-identification.component.html',
  styleUrls: ['./expert-add-identification.component.sass']
})
export class ExpertAddIdentificationComponent implements OnInit {

  // @ViewChild('expSelector') selector: ExpertSelectorComponent;

  selectedExpert: Expert;
  selectedSource: Source;
  formGroup: FormGroup;
  @ViewChild('identificationList') identificationList: ExpertIdentificationsAllComponent;

  constructor(private formBuilder: FormBuilder, private expertService: ExpertControllerService, private flashMessagesService: FlashMessagesService) {}

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      expert: [],
      source: [],
      identification: ['']
    });
  }

  addExpertIdentification() {
    let expertId = this.formGroup.controls.expert.value.identification;
    let identification = this.formGroup.controls.identification.value;
    let sourceName = this.formGroup.controls.source.value.name;

    this.expertService.addExpertIdentificationUsingPOST({
      expertIdentification: expertId,
      identification: identification,
      sourceName: sourceName
    }).subscribe((result) => {
      console.log(result);
      this.flashMessagesService.show(`Expert identification added with internal ID: ${result.id}`, {cssClass: 'alert-success'});
      this.identificationList.reload(result.identifications);
      this.formGroup.controls.identification.setValue('');
      this.formGroup.controls.source.setValue(null);
    });

  }


}
