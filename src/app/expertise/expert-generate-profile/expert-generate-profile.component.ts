import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ProfileControllerService } from 'src/app/api/services';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Profile } from 'src/app/api/models';

@Component({
  selector: 'exp-expert-generate-profile',
  templateUrl: './expert-generate-profile.component.html',
  styleUrls: ['./expert-generate-profile.component.sass']
})
export class ExpertGenerateProfileComponent implements OnInit {

  formGroup: FormGroup;  
  profiles: Profile[] = [];  

  constructor(private formBuilder: FormBuilder, private profileBuilderService : ProfileControllerService, private flashService : FlashMessagesService) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      expert: [null],
      generator: [null],
    });
  }

  generateProfile() {
    let expert = this.formGroup.controls.expert.value;
    let generator = this.formGroup.controls.generator.value;

    console.log(expert);
    console.log(generator);

    this.flashService.show(`Profile generation started for ${expert.name} with ${generator.name}`, {cssClass: 'alert-info'});
    this.profileBuilderService.generateProfilesUsingPOST({expertIdentification: expert.identification, builderName: generator.name}).subscribe(retorno =>
      {this.flashService.show(`Profile generation for ${expert.name} with ${generator.name} finished!`, {cssClass: 'alert-success'});
      console.log("Profiles recebidos: ");
      console.log(retorno);
      this.profiles = retorno;
    });
      
  }

}
