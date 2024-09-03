import { Injectable } from "@angular/core";
import { Review } from "./review.model";

@Injectable({providedIn: "root"})
export class ReviewsService{
    reviews: Review[] = [];

    add(review: Review){
        this.reviews.push(review);
    }
}