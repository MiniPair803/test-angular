import {
  Component,
  OnInit,
  Input,
  OnChanges,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-input-detail',
  templateUrl: './input-detail.component.html',
  styleUrls: ['./input-detail.component.css'],
})
export class InputDetailComponent implements OnInit, OnChanges {
  date = new Date();
  saleAmount = 'saleAmount';
  taxAmount = 'taxAmount';
  isRequire = false;
  selectedOption: string = '0';

  @Output() selectFiling = new EventEmitter<string>();
  @Output() taxData = new EventEmitter<any>();
  @Input() options: any;
  @Input() month: any;
  @Input() year: any;
  @Input() type: Object = [{ value: '1', label: 'On-Time' }];
  @Input() selectedMonth: string = '';
  @Input() selectedYear: string = '';
  @Input() selectType: string = '';

  valueInput: any = {
    saleAmount: '',
    taxAmount: '',
    surcharge: '0.00',
    penalty: '200.00',
    totalAmount: '0.00',
  };
  textAlert: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(): void {}

  onSelectTypeFiling(value: string) {
    this.isRequire = false;
    this.selectedOption = value;
  }

  onSelectMonth(value: any) {
    this.selectedMonth = value;
  }
  onSelectYear(value: any) {
    this.selectedYear = value;
  }
  onSelectType(value: any) {
    this.selectType = value;
  }

  toFormatMoney(value: number): string {
    return value
      .toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
      })
      .replace('$', '');
  }

  handleOnBlur(event: Event) {
    const target = event.target as HTMLInputElement;
    const name = target.name;
    let value = 0;
    if (target.value.slice(0, 1) !== '0') {
      value = parseFloat(Number(target.value).toFixed(2));
    } else {
      value = 0;
    }
    if (name === 'taxAmount') {
      const saleAmount =
        parseFloat(this.valueInput['saleAmount'].replace(/,/g, '')) * 0.07;

      const minSaleAmount = saleAmount - 20 < 0 ? 0 : saleAmount - 20;
      const maxSaleAmount = saleAmount + 20;

      if (target.value !== '') {
        if (value > maxSaleAmount || value < minSaleAmount) {
          this.textAlert = true;
        } else {
          this.textAlert = false;
        }
      } else {
        this.textAlert = false;
      }

      const surcharge = value * 0.1;
      this.valueInput['surcharge'] =
        target.value === '' ? '0.00' : this.toFormatMoney(surcharge);
      const total =
        value +
        (this.selectedOption == '1'
          ? surcharge + parseFloat(this.valueInput['penalty'])
          : 0);
      this.valueInput['totalAmount'] =
        target.value === '' ? '0.00' : this.toFormatMoney(total);
    }
    if (name === 'saleAmount') {
      const taxAmount = value * 0.07;
      const surcharge = taxAmount * 0.1;
      this.valueInput['taxAmount'] =
        target.value === '' ? '' : this.toFormatMoney(taxAmount);
      this.valueInput['surcharge'] =
        target.value === '' ? '0.00' : this.toFormatMoney(surcharge);
      const total =
        taxAmount +
        (this.selectedOption == '1'
          ? surcharge + parseFloat(this.valueInput['penalty'])
          : 0);
      this.valueInput['totalAmount'] =
        target.value === '' ? '0.00' : this.toFormatMoney(total);
    }
    this.valueInput[name] =
      target.value === '' ? '' : this.toFormatMoney(value);
  }

  handleOnFocus(event: Event) {
    const target = event.target as HTMLInputElement;
    const name = target.name;
    const value = target.value.replace(/,/g, '');
    this.valueInput[name] =
      target.value === '' ? '' : parseFloat(value).toFixed(2);
  }

  checkRequired(): boolean {
    const sale =
      !this.valueInput.saleAmount ||
      this.valueInput.saleAmount.trim().length === 0;
    const tax =
      !this.valueInput.taxAmount ||
      this.valueInput.taxAmount.trim().length === 0;

    const month = this.selectedMonth === '';
    const year = this.year === '';

    let isRequired;
    isRequired = sale || tax || month || year;
    if (this.selectedOption == '1') {
      isRequired = isRequired || this.selectType === '';
    }
    this.isRequire = isRequired;
    const obj = {
      filingType: this.selectedOption,
      month: this.month[parseInt(this.selectedMonth)].label,
      year: this.selectedYear,
      saleAmount: this.valueInput.saleAmount,
      taxAmount: this.valueInput.taxAmount,
      surcharge: this.valueInput.surcharge,
      penalty: this.valueInput.penalty,
      totalAmount: this.valueInput.totalAmount,
    };
    this.taxData.emit(obj);
    return isRequired;
  }
}
