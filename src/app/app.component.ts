import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'test-angular';
  dropdownOptions: string[] = ['Option 1', 'Option 2', 'Option 3'];
}
