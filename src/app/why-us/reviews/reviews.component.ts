import { Component } from '@angular/core';
import type { Review } from './review.model';
import { NewReviewComponent } from "./new-review/new-review.component";
import { ReviewComponent } from "./review/review.component";

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [NewReviewComponent, ReviewComponent],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.css'
})
export class ReviewsComponent {
  reviews: Review[] = [];
}
