import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common/common.service';
import { Course } from '../model/course';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  public courses: Course[];
  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
    this.courses = this.commonService.getWishListItems();
  }

}
