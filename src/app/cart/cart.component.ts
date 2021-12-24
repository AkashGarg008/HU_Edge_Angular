import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common/common.service';
import { Course } from '../model/course';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public courses: Course[];
  public totalAmount: number = 0;
  public coursesAvailable: boolean
  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
    this.courses = this.commonService.getCartItems();
    if(this.courses.length) {
      this.coursesAvailable = true;
      this.courses.forEach((course)=> {
        this.totalAmount = this.totalAmount + course.price;
      })
    }
  }

  public checkOut() {
    alert("Order placed!!!");
  }

}
