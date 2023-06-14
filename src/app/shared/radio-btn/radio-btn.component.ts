import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-radio-btn',
  templateUrl: './radio-btn.component.html',
  styleUrls: ['./radio-btn.component.css'],
})
export class RadioBtnComponent implements OnInit {
  @Input() options: any;
  @Output() valueSelected = new EventEmitter<string>();
  @Input() selectedOption: any;
  constructor() {}

  ngOnInit(): void {}

  selectValue(event: Event) {
    const target = event.target as HTMLInputElement;
    const value = target.value;
    this.selectedOption = value;
    this.valueSelected.emit(value);
  }
}
