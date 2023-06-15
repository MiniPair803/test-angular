import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-review-confirm',
  templateUrl: './review-confirm.component.html',
  styleUrls: ['./review-confirm.component.css'],
})
export class ReviewConfirmComponent implements OnInit {
  @Input() selectedOption: any;
  @Input() options: any;
  constructor() {}

  ngOnInit(): void {}
}
