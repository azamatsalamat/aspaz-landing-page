import { Component, inject } from '@angular/core';
import { NewReviewComponent } from "./new-review/new-review.component";
import { ReviewComponent } from "./review/review.component";
import { ReviewsService } from './reviews.service';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [NewReviewComponent, ReviewComponent],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.css'
})
export class ReviewsComponent {
  reviewsService = inject(ReviewsService);
  get reviews(){
    return this.reviewsService.reviews;
  }
}
