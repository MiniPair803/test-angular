import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tax-filing',
  templateUrl: './tax-filing.component.html',
  styleUrls: ['./tax-filing.component.css'],
})
export class TaxFilingComponent implements OnInit {
  @Input() currentStep: number = 1;
  @Input() nameStep: string[] = ['Input Detail', 'Review & Confirm'];
  @Input() optionsFiling: string[] = ['Ordinary Filing', 'Additional Filing'];
  @Input() selectedOption: string = '0';

  constructor() {}
  ngOnInit(): void {}
  onNextClick() {
    if (this.currentStep < 3) {
      this.currentStep++;
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
}
