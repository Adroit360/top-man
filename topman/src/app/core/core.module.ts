import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { HomeComponent } from './home/home.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CheckoutItemComponent } from './checkout-item/checkout-item.component';

@NgModule({
  declarations: [HomeComponent, CheckoutComponent, CheckoutItemComponent],
  imports: [CommonModule, CoreRoutingModule, ReactiveFormsModule],
})
export class CoreModule {}
