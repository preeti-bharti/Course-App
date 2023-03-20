import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output, } from '@angular/core';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {
  @Input() course: any = {};
  @Output() showCourseEvent = new EventEmitter<string>();
  constructor(public datepipe: DatePipe) { }

  ngOnInit(): void {
    console.log(this.course);
  }
  GetAuthorNames(authors : any){
    console.log(authors);
    return authors.toString();
  }
  TransformDurationToHour(duration:number) :string{
    const hours = Math.floor(duration/60);
    const minutesLeft = duration % 60;
    return `${hours < 10 ? '0' : ''}${hours}:${minutesLeft < 10 ? '0': ''}${minutesLeft} hours`
  }
  showCourse(course:any){
    this.showCourseEvent.emit(course);
  }
}
