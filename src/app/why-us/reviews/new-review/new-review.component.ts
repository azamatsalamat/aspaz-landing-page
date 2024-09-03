import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-review',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-review.component.html',
  styleUrl: './new-review.component.css'
})
export class NewReviewComponent {
  enteredName = '';
  enteredText = '';

  onSubmitReview(){
    console.log(this.enteredName);
  }
}
