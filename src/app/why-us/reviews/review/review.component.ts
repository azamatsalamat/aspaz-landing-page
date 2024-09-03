import { Component, Input } from '@angular/core';
import { Review } from '../review.model';

@Component({
  selector: 'app-review',
  standalone: true,
  imports: [],
  templateUrl: './review.component.html',
  styleUrl: './review.component.css'
})
export class ReviewComponent {
  @Input({required: true}) data!: Review;
}
