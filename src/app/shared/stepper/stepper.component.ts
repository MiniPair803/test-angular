import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css'],
})
export class StepperComponent implements OnInit {
  @Input() currentStep: any;
  @Input() nameStep: any;
  totalSteps: number = 2;
  steps: any[] = [{}];

  constructor() {}
  ngOnInit() {
    this.steps = Array(this.nameStep.length)
      .fill(0)
      .map((_, i) => {
        const obj = {
          id: i + 1,
          name: this.nameStep[i],
        };
        return obj;
      });
  }
}
