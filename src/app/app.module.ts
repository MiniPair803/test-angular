import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DropdownListComponent } from './shared/dropdown-list/dropdown-list.component';
import { HeaderComponent } from './shared/header/header.component';
import { StepperComponent } from './shared/stepper/stepper.component';
import { TaxFilingComponent } from './tax-filing/tax-filing.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { InputDetailComponent } from './tax-filing/input-detail/input-detail.component';
import { ReviewConfirmComponent } from './tax-filing/review-confirm/review-confirm.component';
import { RadioBtnComponent } from './shared/radio-btn/radio-btn.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DropdownListComponent,
    HeaderComponent,
    StepperComponent,
    TaxFilingComponent,
    InputDetailComponent,
    ReviewConfirmComponent,
    RadioBtnComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatStepperModule,
    MatFormFieldModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
