import { Component, OnInit } from '@angular/core';
import { CommonService } from './common/common.service';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-udemy-clone';
  private courseData: Course[] = [];

  constructor(private commonService: CommonService) {

  }
  ngOnInit() {

    // this.commonService.getCourseData().subscribe(
    //   (data: {courses: Course[]}) => {
    //     this.courseData = data.courses;
    //     console.log(this.courseData);
    //   }
    // );

    this.courseData = [
      {
        "title": "Full stack understanding",
        "author": "John",
        "price": 399,
        "tags": ["React"]
     }
    ];
    console.log(this.courseData);
  }
}
