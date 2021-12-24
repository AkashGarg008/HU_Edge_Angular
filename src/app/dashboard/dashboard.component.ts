import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public courses: Course[];
  constructor() { }

  ngOnInit(): void {
    // this.courses = this.commonService.getCourseData().subscribe(
    //   (data: {courses: Course[]}) => {
    //     this.courses = data.courses;
    //     console.log(this.courses);
    //   }
    // );
    this.courses = [
      {
        "title": "Full stack understanding",
        "author": "John",
        "price": 399,
        "tags": ["React"]
     },
     {
      "title": "Full angular understanding",
      "author": "John",
      "price": 499,
      "tags": ["Angular"]
    },
    {
      "title": "Full react fragment understanding",
      "author": "Akash",
      "price": 499,
      "tags": ["React"]
    },
    {
      "title": "Full angular material understanding",
      "author": "Akash",
      "price": 499,
      "tags": ["Angular"]
    }
    ];
  }

}
