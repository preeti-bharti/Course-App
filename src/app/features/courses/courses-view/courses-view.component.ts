import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursesStateFacade } from 'src/app/store/courses/courses.facade';
import { UserFacade } from 'src/app/user/store/user.facade';

@Component({
  selector: 'app-courses-view',
  templateUrl: './courses-view.component.html',
  styleUrls: ['./courses-view.component.css']
})
export class CoursesViewComponent implements OnInit {
  courseId: any;
  courseDetails: any = [];
  isAdmin: boolean = false;

  constructor(private activatedRoute: ActivatedRoute,
    public courseStoreService: CoursesStateFacade,
    private userStoreService: UserFacade) { }

  ngOnInit(): void {
    this.userStoreService.isAdmin$.subscribe(data => { this.isAdmin = data });
    this.activatedRoute.params.subscribe(params => {
      this.courseId = params['id'];
    });
    this.courseStoreService.getSingleCourse(this.courseId);
    this.courseStoreService.course$.subscribe((data: any) => {
      if(Object.keys(data).length > 0){
        this.courseDetails.push(data);
      }
    })
  }

}
