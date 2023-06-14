import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dropdown-list',
  templateUrl: './dropdown-list.component.html',
  styleUrls: ['./dropdown-list.component.css'],
})
export class DropdownListComponent implements OnInit {
  @Input() options: any;
  @Input() defaultOption: any;
  @Output() valueSelected = new EventEmitter<string>();
  selectedOption: string = '';
  constructor() {}

  ngOnInit(): void {}

  onSelect(event: Event): void {
    const target = event.target as HTMLInputElement;
    console.log(target);
    this.selectedOption = target.value;
    this.valueSelected.emit(target.value);
  }
}
