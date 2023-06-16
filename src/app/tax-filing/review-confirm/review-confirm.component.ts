import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-review-confirm',
  templateUrl: './review-confirm.component.html',
  styleUrls: ['./review-confirm.component.css'],
})
export class ReviewConfirmComponent implements OnInit {
  @Input() taxData: any;
  @Input() options: any;
  @Input() month: any;
  @Input() year: any;
  constructor() {}

  ngOnInit(): void {}
}
