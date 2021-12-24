import { Component, OnInit, Input } from '@angular/core';
import { CommonService } from 'src/app/common/common.service';
import { Course } from 'src/app/model/course';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

  @Input() course: Course;
  @Input() index: number;
  public disableAddToCart: boolean;
  // private r÷outer: ActivatedRoute;
  constructor(private commonService: CommonService, private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
  }

  public addToCart(e: Event) {
    e.stopPropagation();
    let cartItems = this.commonService.getCartItems();
    if (!cartItems.length || cartItems.indexOf(this.course) === -1) {
      this.commonService.getCartItems().push(this.course);
      this.showAlert("Course " + this.course.title + " added to cart");
    } else {
      this.showAlert("Course already added.");
      this.disableAddToCart = true;
    }
  }

  public addRemoveFromWishlist(e: any) {
    e.stopPropagation();
    let wishListItems = this.commonService.getWishListItems();
    if(e.target.checked){        
      if (this.checkExistsInWishList(this.course, wishListItems)) {
        let index = wishListItems.indexOf(this.course);
        wishListItems.splice(index, 1);
        this.showAlert("Course " + this.course.title + " removed from wishlist");
      } else {
        this.showAlert("Course already added.");
      }
    } else {
      if (!this.checkExistsInWishList(this.course, wishListItems)) {
        console.log(this.commonService.getWishListItems());
        console.log(this.course);
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
    if (!items.length || items.indexOf(this.course) == -1) {
      return false;
    }
    return true;
  }

  public navigateToCourseDetail(event: any){
    event.stopPropagation();
    this.router.navigate(['courseDetail']);
    return false;
}

}
