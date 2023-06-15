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
  @Output() selectFiling = new EventEmitter<string>();
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
  @Input() selectedMonth: string = '';
  @Input() selectedYear: string = '';

  valueInput: any = { saleAmount: 0, taxAmount: 0 };

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
    console.log(value);
    this.selectedYear = value;
  }

  formatCurrency(event: Event) {
    const target = event.target as HTMLInputElement;
    const id = target.id;
    let value = 0;
    if (target.value.slice(0, 1) !== '0') {
      value = Number(Number(target.value).toFixed(2));
    } else {
      value = 0;
    }
    this.valueInput[id] = value;
    console.log(this.valueInput);
  }
}
