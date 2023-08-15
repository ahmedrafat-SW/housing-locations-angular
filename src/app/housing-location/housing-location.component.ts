import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housinglocation';
import { RouterModule } from '@angular/router';
@Component({
  imports: [CommonModule, RouterModule],
  template: `
    <section class="listing">
      <img
        [src]="housingLocation.photo"
        alt="Exterior photo of {{ housingLocation.name }}"
        class="listing-photo"
      />
      <h2 class="listing-heading">{{ housingLocation.name }}</h2>
      <p class="listing-location">
        {{ housingLocation.city }}, {{ housingLocation.state }}
      </p>
      <a [routerLink]="['/details', housingLocation.id]">Learn More</a>
    </section>
  `,
  selector: 'app-housing-location',
  standalone: true,
  styleUrls: ['./housing-location.component.css'],
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
}
