import { Injectable } from "@angular/core";
import { Review } from "./review.model";

@Injectable({providedIn: "root"})
export class ReviewsService{
    reviews: Review[] = [
        {
            id: crypto.randomUUID(),
            name: "Azamat Salamat",
            text: "Have been ordering from Aspaz for a month. Finally I can cook delicious meals!"
        }
    ];

    constructor(){
        const reviews = localStorage.getItem('aspaz-reviews');
        if (reviews){
            this.reviews = JSON.parse(reviews);
        }
    }

    add(review: Review){
        this.reviews.unshift(review);
        this.saveReviews();
    }

    private saveReviews(){
        localStorage.setItem('aspaz-reviews', JSON.stringify(this.reviews));
    }
}