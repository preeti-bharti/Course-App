import { Component, OnInit } from '@angular/core';
import { CourseCard } from '../../shared/models/course-card.model';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses:CourseCard[];
  iSEditable:boolean=false;
  constructor() {
     this.courses=[];
    //[
    // new CourseCard(
    //   'Java',
    //   'Java is a widely used object-oriented programming language and software platform that runs on billions of devices, including notebook computers, mobile devices, gaming consoles, medical devices and many others. ',
    //   new Date(),
    //   121,
    //   ['James Gosling']),
    // new CourseCard(
    //   'C#',
    //   `C# is an object-oriented, component-oriented programming language. 
    //   C# provides language constructs to directly support these concepts, making C# a natural language in which to create and use software components.
    //    Since its origin, C# has added features to support new workloads and emerging software design practices. At its core, C# is an object-oriented language. 
    //   You define types and their behavior.`,
    //   new Date(),
    //   91,
    //   ['Anders Hejlsberg','Someone']),
    // new CourseCard(
    //   'Kotlin',
    //   `Kotlin\'s modern language features allow you to focus on expressing your ideas and write less boilerplate code.
    //   With nullability included in its type system, Kotlin helps you avoid NullPointerExceptions. Android apps that use Kotlin are 20% less likely to crash.
    //   Android's modern UI toolkit is built on Kotlin, allowing you to create UI quickly with powerful and intuitive APIs.`,
    //   new Date(),
    //   60,
    //   ['JetBrains'])]; 
    
   }

  ngOnInit(): void {
    
  }
  IsCoursesExists(courses:CourseCard[]){
    return this.courses.length>0;
  }

  AddCourse()//course:CourseCard)
  {
    console.log("course Added!")
  }
 
}
