import { Component, OnInit } from '@angular/core';
import { CourseCard } from 'src/app/shared/models/course-card.model';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  //courses:CourseCard[]=[];
  constructor() {
    
   }

  ngOnInit(): void {
  }
  

}
