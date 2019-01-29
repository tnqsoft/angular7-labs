import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl, AbstractControl } from '@angular/forms';

export interface IMock {
  name: string;
  age: number;
  sex?: string;
}

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {
  mock: Array<IMock> = [];
  demoForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.mock = this.getMock();
    this.demoForm = this.formBuilder.group({
      itemDetails: this.formBuilder.array(
        // Init for each form row
        this.mock.map(item => this.formBuilder.group({
          name: [item.name, [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
          age: [item.age, Validators.required],
          sex: item.sex,
        }))
      )
    });
  }

  private getMock(): Array<IMock> {
    return [
      {
        name: '',
        age: null,
        sex: ''
      },
      {
        name: 'Nguyen Nhu Tuan',
        age: 35,
        sex: 'male'
      },
      {
        name: 'Ly Tu Long',
        age: 60,
        sex: 'male'
      },
    ];
  }

  onAdd(index: number) {
    if (this.demoForm.controls.itemDetails.get(index.toString()).valid) {
      console.log(this.demoForm.controls.itemDetails.get(index.toString()).value);
    } else {
      console.log(`Item has index ${index} invalid`);
    }
  }

  getControl(index: number, name: string): AbstractControl {
    return (<FormArray>this.demoForm.controls.itemDetails.get(index.toString()).get(name));
  }
}
