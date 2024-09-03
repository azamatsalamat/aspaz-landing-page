import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Review } from '../review.model';

@Component({
  selector: 'app-new-review',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-review.component.html',
  styleUrl: './new-review.component.css'
})
export class NewReviewComponent {
  @Output() submitReview = new EventEmitter<Review>();

  enteredName = '';
  enteredText = '';

  onSubmitReview(){
    if (this.enteredName && this.enteredText){
      let review = {
        id: crypto.randomUUID(),
        name: this.enteredName,
        text: this.enteredText
      }
      this.submitReview.emit(review);
    }
  }
}
