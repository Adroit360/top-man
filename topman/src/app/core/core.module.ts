import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { HomeComponent } from './home/home.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CheckoutItemComponent } from './checkout-item/checkout-item.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';

@NgModule({
  declarations: [HomeComponent, CheckoutComponent, CheckoutItemComponent, NavbarComponent, ScrollToTopComponent],
  imports: [CommonModule, CoreRoutingModule, ReactiveFormsModule],
})
export class CoreModule {}
