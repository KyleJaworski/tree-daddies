import { Data } from "@angular/router";

export interface BookingDetails {
    name: string;
    email: string;
    address: string;
    phone: string;
    services: string[];
    date: string;
  }