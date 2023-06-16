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
  date = new Date();
  @Input() currentStep: number = 1;
  @Input() nameStep: object = [
    { icon: 'create', name: 'Input Detail' },
    { icon: 'save', name: 'Review & Confirm' },
  ];
  @Input() optionsFiling: string[] = ['Ordinary Filing', 'Additional Filing'];
  @Input() month: Object = [
    { value: '01', label: 'January' },
    { value: '02', label: 'February' },
    { value: '03', label: 'March' },
    { value: '04', label: 'April' },
    { value: '05', label: 'May' },
    { value: '06', label: 'June' },
    { value: '07', label: 'July' },
    { value: '08', label: 'August' },
    { value: '09', label: 'September' },
    { value: '10', label: 'October' },
    { value: '11', label: 'November' },
    { value: '12', label: 'December' },
  ];
  @Input() year: Object = Array.from(
    { length: this.date.getFullYear() - 2020 + 1 },
    (_, i) => 2020 + i
  ).map((m) => ({
    value: m,
    label: m,
  }));
  @Input() taxData: any;

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

  setTaxData(value: any) {
    this.taxData = value;
  }

  checkRequired(): boolean {
    const isRequired = !this.inputDetailComponent.checkRequired();
    return isRequired;
  }
}
