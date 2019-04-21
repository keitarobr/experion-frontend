import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ExpertControllerService } from '../../api/services/expert-controller.service';
import { Expert } from 'src/app/api/models';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ExpertFindByNameComponent } from 'src/app/components/expert/expert-find-by-name/expert-find-by-name.component';

@Component({
  selector: 'exp-expert-add',
  templateUrl: './expert-add.component.html',
  styleUrls: ['./expert-add.component.sass']
})
export class ExpertAddComponent implements OnInit {

  @ViewChild('formAddExpert') formElement: ElementRef<HTMLFormElement>;
  @ViewChild('expertList') expertList: ExpertFindByNameComponent;
  private expert: Expert;
  private formGroup: FormGroup;

  constructor(private fb: FormBuilder, private expertService: ExpertControllerService,
    private flashMessagesService: FlashMessagesService) {

    this.formGroup = fb.group({
      identification: ['', [Validators.required]],
      name: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  addExpert() {
    this.expertService.addUsingPOST(this.formGroup.getRawValue()).subscribe((result) => {
      this.flashMessagesService.show(`Expert added with internal ID: ${result.id}`, { cssClass: 'alert-success' });
      (this.formElement.nativeElement.querySelector('#id') as any).focus();
      this.formGroup.reset();
      this.expertList.reload();
    });
  }

}
