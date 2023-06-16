import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { InputDetailComponent } from '../tax-filing/input-detail/input-detail.component';

@Component({
  selector: 'app-tax-filing',
  templateUrl: './tax-filing.component.html',
  styleUrls: ['./tax-filing.component.css'],
})
export class TaxFilingComponent implements OnInit {
  @ViewChild(InputDetailComponent)
  inputDetailComponent: InputDetailComponent = new InputDetailComponent();
  constructor() {}
  @Input() currentStep: number = 1;
  @Input() nameStep: string[] = ['Input Detail', 'Review & Confirm'];
  @Input() optionsFiling: string[] = ['Ordinary Filing', 'Additional Filing'];
  @Input() selectedOption: string = '0';

  ngOnInit(): void {}
  onNextClick() {
    if (this.checkRequired()) {
      if (this.currentStep < 3) {
        this.currentStep++;
      }
    }
  }
  onPreviousClick() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }
  setSelectFiling(value: string) {
    this.selectedOption = value;
  }

  setTaxData(value: any) {
    console.log(value);
  }

  checkRequired(): boolean {
    const isRequired = !this.inputDetailComponent.checkRequired();
    return isRequired;
  }
}
