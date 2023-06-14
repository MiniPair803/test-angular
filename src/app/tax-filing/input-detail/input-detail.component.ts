import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-input-detail',
  templateUrl: './input-detail.component.html',
  styleUrls: ['./input-detail.component.css'],
})
export class InputDetailComponent implements OnInit, OnChanges {
  date = new Date();
  @Input() options: string[] = ['Ordinary Filing', 'Additional Filing'];
  @Input() selectedOption: string = '0';
  selectedTypeFilingValue: string = '0';
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

  constructor() {}

  ngOnInit(): void {
    console.log(this.year, this.date.getFullYear());
  }

  ngOnChanges(): void {
    console.log(this.selectedTypeFilingValue);
  }

  onSelectTypeFiling(value: string) {
    this.selectedTypeFilingValue = value;
  }

  onSelectMonth(value: any) {
    this.selectedMonth = value;
  }
  onSelectYear(value: any) {
    console.log(value);
    this.selectedYear = value;
  }
}