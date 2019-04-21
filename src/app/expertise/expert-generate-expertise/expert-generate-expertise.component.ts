import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ExpertiseControllerService } from 'src/app/api/services';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Expert } from 'src/app/api/models';

@Component({
  selector: 'exp-expert-generate-expertise',
  templateUrl: './expert-generate-expertise.component.html',
  styleUrls: ['./expert-generate-expertise.component.sass']
})
export class ExpertGenerateExpertiseComponent implements OnInit {

  formGroup: FormGroup;  
  selectedExpert: Expert;

  constructor(private formBuilder: FormBuilder, private expertiseBuilderService : ExpertiseControllerService, private flashService : FlashMessagesService) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      expert: [null],
      generator: [null],
    });

    this.formGroup.get('expert').valueChanges.subscribe(expert => {this.selectedExpert = expert;
      console.log("ExpertGenerateExpertiseComponent => Expert selecionado: " + expert);
    });

  }

  generateExpertise() {
    let expert = this.formGroup.controls.expert.value;
    let generator = this.formGroup.controls.generator.value;

    console.log(expert);
    console.log(generator);

    this.flashService.show(`Expertise generation started for ${expert.name} with ${generator.name}`, {cssClass: 'alert-info'});
    this.expertiseBuilderService.generateExpertiseUsingPOST({expertIdentification: expert.identification, builderName: generator.name}).subscribe(retorno =>
      {this.flashService.show(`Expertise generation for ${expert.name} with ${generator.name} finished!`, {cssClass: 'alert-success'});
      this.selectedExpert = this.selectedExpert;      
    });
      
  }

}
