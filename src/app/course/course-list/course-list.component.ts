import { Component, OnInit, Input } from '@angular/core';
import { CommonService } from 'src/app/common/common.service';
import { Course } from 'src/app/model/course';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  @Input() courses: Course[];
  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
    
  }

}
