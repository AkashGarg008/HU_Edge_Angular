import { Component, OnInit, Input } from '@angular/core';
import { CommonService } from 'src/app/common/common.service';
import { Course } from 'src/app/model/course';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

  @Input() course: Course;
  @Input() index: number;
  public disableAddToCart: boolean;
  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
  }

  public addToCart() {
    // if (this.commonService.getCartItems().contains(course)) {
    //   this.disableAddToCart = true;
    // }
    let cartItems = this.commonService.getCartItems();
    if (cartItems.indexOf(this.course) === -1) {
      this.commonService.getCartItems().push(this.course);
    } else {
      this.showAlert("Course already added.");
      this.disableAddToCart = true;
    }
    this.showAlert("Course " + this.course.title + " added to cart");
  }

  public addRemoveFromWishlist(e: any) {
    this.commonService.getWishListItems().push(this.course);
    let wishListItems = this.commonService.getWishListItems();
    if(e.target.checked){        
      if (this.checkExistsInWishList(this.course, wishListItems)) {
        let index = wishListItems.indexOf(this.course);
        wishListItems.splice(index, 1);
        this.showAlert("Course " + this.course.title + " removed from wishlist");
      } else {
        this.showAlert("Course already added.");
      }
      this.showAlert("Course " + this.course.title + " removed from wishlist");
    } else {
      if (this.checkExistsInWishList(this.course, wishListItems)) {
        this.commonService.getWishListItems().push(this.course);
        this.showAlert("Course " + this.course.title + " added to wishlist");
      } else {
        this.showAlert("Course already added.");
      }
    }
  }

  public showAlert(message: String) {
    alert(message);
  }

  public checkExistsInWishList(course: Course, items: Course[]) {
    if (items.indexOf(this.course) != -1)
    return true;
    return false;
  }

}
