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
  @Output() selectFiling = new EventEmitter<string>();
  @Output() taxData = new EventEmitter<any>();
  @Input() options: any;
  @Input() selectedOption: any;
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

  @Input() type: Object = [{ value: '1', label: 'On-Time' }];
  @Input() selectedMonth: string = '';
  @Input() selectedYear: string = '';

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
    this.selectFiling.emit(value);
  }

  onSelectMonth(value: any) {
    this.selectedMonth = value;
  }
  onSelectYear(value: any) {
    this.selectedYear = value;
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
      const total = value + surcharge + parseFloat(this.valueInput['penalty']);
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
        taxAmount + surcharge + parseFloat(this.valueInput['penalty']);
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

    const isRequired = sale || tax || month || year;
    this.isRequire = isRequired;

    console.log(isRequired);
    return isRequired;
  }
}
