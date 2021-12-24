import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Course } from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { 
  }

  private wishListItems: Course[] = [];
  private cartItems: Course[] = [];
  public getCourseData(): Observable<any> {
    return this.http.get<any>('assets/coursedata/courseData.json');
  }

  public getWishListItems() {
    return this.wishListItems;
  }

  public getCartItems() {
    return this.cartItems;
  }
}
