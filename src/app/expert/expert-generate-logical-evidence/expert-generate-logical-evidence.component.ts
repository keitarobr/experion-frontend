import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';
import { LogicalEvidenceControllerService } from 'src/app/api/services';
import { EvidenceSourceInput, Expert } from 'src/app/api/models';

@Component({
  selector: 'exp-expert-generate-logical-evidence',
  templateUrl: './expert-generate-logical-evidence.component.html',
  styleUrls: ['./expert-generate-logical-evidence.component.sass']
})
export class ExpertGenerateLogicalEvidenceComponent implements OnInit {

  formGroup: FormGroup;
  selectedExpert: Expert;
  selectedInputs: EvidenceSourceInput[];

  constructor(private formBuilder: FormBuilder, private logicalEvidenceService: LogicalEvidenceControllerService, private flashService: FlashMessagesService) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      expert: [null],
      inputs: [],
      generator: [null],
      language: null
    });
    this.formGroup.get('expert').valueChanges.subscribe(expert => {
    this.selectedExpert = expert;
      console.log("ExpertGenerateLogicalEvidenceComponent => Expert selecionado: " + expert);
    });

    this.formGroup.get('inputs').valueChanges.subscribe(inputs => {
      this.selectedInputs = inputs;
      console.log("Selected inputs: ");
      console.log(this.selectedInputs);
    });
  }

  generateEvidences() {
    let expert = this.formGroup.controls.expert.value;
    let generator = this.formGroup.controls.generator.value;
    let inputs = this.formGroup.controls.inputs.value;
    let language = this.formGroup.controls.language.value;

    console.log(expert);
    console.log(inputs);
    console.log(language);
    console.log(generator);

    inputs.forEach(input => {
      this.flashService.show(`Evidence generation started for ${expert.name} at the input ${input.name} in ${language.name} with ${generator.name}`, { cssClass: 'alert-info' });
      this.logicalEvidenceService.generateLogicalEvidencesUsingPOST({
        languageCode: language.id, expertIdentification: expert.identification, inputName: input.name,
        builderName: generator.name
      }).subscribe(retorno => { this.flashService.show(`Evidence generation for ${expert.name} at the input ${input.name} in ${language.name}  with ${generator.name} finished!`, { cssClass: 'alert-success' }); });
    });
  }

}
