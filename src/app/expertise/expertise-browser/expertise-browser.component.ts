import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Expert } from 'src/app/api/models';

@Component({
  selector: 'exp-expertise-browser',
  templateUrl: './expertise-browser.component.html',
  styleUrls: ['./expertise-browser.component.sass']
})
export class ExpertiseBrowserComponent implements OnInit {

  formGroup: FormGroup;  
  selectedExpert: Expert;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      expert: [null],
    });    
    this.formGroup.get('expert').valueChanges.subscribe(expert => {this.selectedExpert = expert;
      console.log("ExpertGenerateExpertiseComponent => Expert selecionado: " + expert);
    });
  }

}
