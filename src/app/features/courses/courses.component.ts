import { Component, OnInit } from '@angular/core';
//import { CourseCard } from '../../shared/models/course-card.model';
import { Router } from '@angular/router';
import { AuthStateFacade } from 'src/app/auth/store/auth.facade';
import { CoursesStateFacade } from 'src/app/store/courses/courses.facade';
import { UserFacade } from 'src/app/user/store/user.facade';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses:any=[];
  isAdmin : boolean = true;
  constructor(public coursesStoreService : CoursesStateFacade, 
    public userStoreService : UserFacade,
    private authService : AuthStateFacade,
    private router : Router) { 
      this.userStoreService.isAdmin$.subscribe(data => this.isAdmin = data);
      this.coursesStoreService.courses$.subscribe(data => {this.courses = data});
      this.coursesStoreService.allCourses$.subscribe(data => {this.courses = data});

    }
  //iSEditable:boolean=false;
  //constructor() {
    // this.courses=[];
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
    
   //}

    
   ngOnInit(): void {
    this.coursesStoreService.getAllCourses();
  }

  IsCoursesExists(courses:any[]){
    return this.courses.length>0;
  }

  search(event : any){
    this.coursesStoreService.getFilteredCourses(event);
  }
  logout(){
    console.log('logout');
    this.authService.logout();
    this.authService.closeSession();
  }
  navigateToAddNewCoursePage(){
    this.router.navigate(['courses/add']);
  }
 
}
