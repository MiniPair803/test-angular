import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dropdown-list',
  templateUrl: './dropdown-list.component.html',
  styleUrls: ['./dropdown-list.component.css'],
})
export class DropdownListComponent implements OnInit {
  @Input() idDropDown: any;
  @Input() options: any;
  @Input() defaultOption: any;
  @Input() isRequired: boolean = false;
  @Output() valueSelected = new EventEmitter<string>();
  selectedOption: string = '';
  constructor() {}

  ngOnInit(): void {}

  onSelect(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.selectedOption = target.value;
    this.valueSelected.emit(target.value);
  }
}
