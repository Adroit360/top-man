import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  dummyData = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  categories = [
    'aki ola',
    'fiction',
    'aki ola',
    'a+ series',
    'aki ola',
    'aki ola',
    'Science & Fiction',
    'GNAT',
    'Boat Books',
    'Apo Galore',
    'Aki ola',
    'the books company',
  ];
  constructor(private router: Router) {}

  ngOnInit(): void {}

  //TODO: add the id and logic to the checkout page and add the item to the checkout
  onBuyBook() {
    this.router.navigate(['/checkout']);
  }
}
