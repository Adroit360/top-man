import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { cities } from '../models/locations';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  checkoutForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    phoneNumber: new FormControl('', [
      Validators.required,
      Validators.pattern(/^\+233\d{9}|^233\d{9}|^\d{10}$/),
    ]),
    location: new FormControl('', [Validators.required]),
  });
  submitted = false;
  locations: { name: string; price: number }[] = cities;
  invalidLocation = false;
  deliveryFee: number = 0;

  constructor() {}

  ngOnInit(): void {}

  // convenience getter for easy access to form fields
  get f() {
    return this.checkoutForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.checkoutForm.invalid) {
      window.scroll(0, 0);
      return;
    }

    if (this.invalidLocation) {
      // this.isValidLocation = true;
      return;
    }
  }

  onCalculateDeliveryFee(event: any): void {
    const selectedLocation = event.target.value;
    const city: { name: string; price: number } | undefined =
      this.locations.find((item) => item.name === selectedLocation);
    if (!city) {
      this.invalidLocation = true;
      this.deliveryFee = 0;
    } else {
      this.invalidLocation = false;
      // this.orderForm.patchValue({
      //   deliveryFee: city.price.toFixed(2),
      // });
      this.deliveryFee = city.price;
      //this.totalPrice = this.getTotalPrice(this.deliveryFee, this.priceOfFood);
    }
  }

  onAddMoreBooks() {}
}
