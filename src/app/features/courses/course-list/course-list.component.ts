import { Component, OnInit,Input } from '@angular/core';
import { CourseCard } from 'src/app/shared/models/course-card.model';
@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  ShowCourse="Show Course";
  @Input() courseList:CourseCard[]=[];
  @Input() editableCourse!:boolean;
  constructor() { 
  }

  ngOnInit(): void {
  }

    transformDurationToHour(duration:number) :string{
    const hours = Math.floor(duration/60);
    const minutesLeft = duration % 60;
    return `${hours < 10 ? '0' : ''}${hours}:${minutesLeft < 10 ? '0': ''}${minutesLeft} hours`
  }

  IsCourseEditable(course:CourseCard)
  {
      return course.authores.length>1;
  }

}
