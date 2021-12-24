import { Component, OnInit, Input } from '@angular/core';
import { CommonService } from '../common/common.service';
import { Course } from '../model/course';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public courses: Course[];
  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
    this.commonService.getCourseData().subscribe(
      (data: {courses: Course[]}) => {
        this.courses = data.courses;
        console.log(this.courses);
      }
    );
  }

}
