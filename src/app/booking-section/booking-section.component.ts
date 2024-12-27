import { Component, inject, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { InputTextModule } from 'primeng/inputtext';
import { BookingDetails } from '../models/bookingDetails';
import { FloatLabel } from 'primeng/floatlabel';
import { InputMask } from 'primeng/inputmask';
import { MultiSelectModule } from 'primeng/multiselect';
import { DatePicker } from 'primeng/datepicker';
import { CommonModule } from '@angular/common';
import { MatStepper } from '@angular/material/stepper';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-booking-section',
  imports: [
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    InputTextModule,
    FloatLabel,
    InputMask,
    MultiSelectModule,
    DatePicker,
    CommonModule,
  ],
  templateUrl: './booking-section.component.html',
  styleUrl: './booking-section.component.scss',
})
export class BookingSectionComponent implements OnInit {
  @ViewChild('stepper') stepper!: MatStepper;

  formData: BookingDetails = {
    name: '',
    email: '',
    address: '',
    phone: '',
    services: [],
    date: '',
  };
  bookingForm!: FormGroup;

  isEditable!: Boolean;

  selectedServices: string[] = [];

  services = [
    { name: 'Cutting', code: 'Cutting' },
    { name: 'Pruning', code: 'Pruning' },
    { name: 'Mulching', code: 'Mulching' },
    { name: 'Follow-up', code: 'Follow-up' },
    { name: 'General Consultation', code: 'General Consultation' },
  ];
  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<BookingSectionComponent>
  ) {}

  ngOnInit() {
    this.isEditable = true;
    this.bookingForm = this.formBuilder.group({
      user: this.formBuilder.group({
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        address: ['', Validators.required],
        phone: ['', Validators.required],
      }),
      services: this.formBuilder.group({
        services: ['', Validators.required],
      }),
      date: this.formBuilder.group({
        date: ['', Validators.required],
      }),
    });
  }

  get servicesDisplayValue(): string {
    return (
      this.formData.services?.map((service) => service).join(', ') ||
      'No services selected'
    );
  }

  populateFormData() {
    const userGroup = this.bookingForm.get('user')?.value;
    const servicesGroup = this.bookingForm.get('services')?.value;
    const dateGroup = this.bookingForm.get('date')?.value;

    this.formData = {
      name: userGroup?.name || '',
      email: userGroup?.email || '',
      address: userGroup?.address || '',
      phone: userGroup?.phone || '',
      services: Array.isArray(servicesGroup?.services)
        ? servicesGroup.services.map(
            (service: { name: string; code: string }) => service.name
          )
        : [], // Extract only the names
      date: dateGroup?.date || '',
    };
  }

  onReview() {
    this.populateFormData();
  }

  getFormGroup(bookingForm: FormGroup, section: string): FormGroup {
    return bookingForm.get(section) as FormGroup;
  }

  onSubmit() {
    this.isEditable = false;

    this.formData = {
      name: '',
      email: '',
      address: '',
      phone: '',
      services: [],
      date: '',
    };
  }

  closeDialog(): void {
    this.bookingForm.reset(); // Reset the form
    this.dialogRef.close(); // Close the dialog
  }
}
