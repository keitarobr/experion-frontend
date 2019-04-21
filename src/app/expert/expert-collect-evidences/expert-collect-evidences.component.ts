import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ExpertControllerService } from 'src/app/api/services';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Expert, EvidenceSourceInput } from 'src/app/api/models';

@Component({
  selector: 'expert-collect-evidences',
  templateUrl: './expert-collect-evidences.component.html',
  styleUrls: ['./expert-collect-evidences.component.sass']
})
export class ExpertCollectEvidencesComponent implements OnInit {

  formGroup: FormGroup;  
  selectedExpert: Expert;
  selectedInputs: EvidenceSourceInput[];

  constructor(private formBuilder: FormBuilder, private expertService : ExpertControllerService, private flashService : FlashMessagesService) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      expert: [null],
      input: [null],
      language: [null]
    });
    this.formGroup.get('expert').valueChanges.subscribe(expert => {this.selectedExpert = expert;
      console.log("ExpertCollectEvidencesComponent => Expert selecionado: " + expert);
    });

    this.formGroup.get('input').valueChanges.subscribe(input => {this.selectedInputs = input;
      console.log("ExpertCollectEvidencesComponent => Inputs selecionados: " + input);
    });
  }

  collectEvidences() {
    let expert = this.formGroup.controls.expert.value;
    let language = this.formGroup.controls.language.value;

//    console.log(expert);
//    console.log(language);
    let inputs = this.formGroup.controls.input.value;
    console.log(inputs);
    inputs.forEach(input => {        
      this.flashService.show(`Evidence collection started for ${expert.name} at the input ${input.name} in ${language.name}`, {cssClass: 'alert-info'});
      this.expertService.collectEvidencesUsingPOST({language: language.id, expertIdentification: expert.identification, inputName: input.name}).subscribe(retorno =>
        {this.flashService.show(`Evidence collection for ${expert.name} at the input ${input.name} in ${language.name} finished!`, {cssClass: 'alert-success'});});
  
    });
  }

}
