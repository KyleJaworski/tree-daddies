import { MatIconModule } from '@angular/material/icon';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { InputTextModule } from 'primeng/inputtext';
import { MatDialog } from '@angular/material/dialog';
import { MultiSelectModule } from 'primeng/multiselect';
import { BookingSectionComponent } from '../booking-section/booking-section.component';

@Component({
  selector: 'app-contact',
  imports: [
    MatButtonModule,
    MatIconModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    InputTextModule,
    MultiSelectModule,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  constructor(private dialog: MatDialog) {}

  makeCall(): void {
    window.location.href = 'tel:+17656050530';
  }

  sendEmail(): void {
    console.log('Email button clicked');
    const recipient = 'KyleJaworski1@gmail.com';
    const subject = encodeURIComponent('Inquiry');
    const body = encodeURIComponent(
      'Hello, I would like to know more about...'
    );
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
  }
  openBookingDialog() {
    const dialogRef = this.dialog.open(BookingSectionComponent);

    dialogRef.afterClosed().subscribe(() => {
      console.log('Dialog closed');
      // Reset stepper or other form states
    });
  }
}
