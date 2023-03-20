import { Component, OnInit,Input } from '@angular/core';
//import { CourseCard } from 'src/app/shared/models/course-card.model';
import {faPen,faTrash} from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { CoursesStoreService } from 'src/app/services/courses-store.service';
import { ConfirmModalService } from 'src/app/shared/components/confirm-modal/confirm-modal.service';
@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
 // @Input() isCourseEditable: boolean = false;
  faPen=faPen;
  faTrash=faTrash;
  @Input() courseList:any[]=[];
  @Input() isCourseEditable!:boolean;
  modalOptions: any = {
    message: "Are you sure to contiue",
    title: "Alert!",
    okButtonText: "Ok",
    cancelButtonText: "Cancel"
  }
  constructor(private confirmModalService: ConfirmModalService, private router: Router,
    private courseStoreService : CoursesStoreService) { 
  }

  ngOnInit(): void {  }

  // IsCourseEditable(course:CourseCard)
  // {
  //     return course.authores.length>1;
  // }

    EditCourse(course: any) {
      var editUrl = "/courses/edit/" + course.id;
      this.router.navigate([editUrl]);
    }
    ShowCourse(event: any) {
      this.router.navigate(['courses/'+event.id]);
    }
    DeleteCourse(course: any) {
      var this$ = this;
      this.confirmModalService.confirm(this.modalOptions, function () {
        this$.courseStoreService.deleteCourse(course.id);
      }, function () {
        console.log("delete course cancel")
      })
    }
}
