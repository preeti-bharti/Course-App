import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.css']
})
export class CourseEditComponent implements OnInit {
  courseForm: FormGroup;
  courseId: any = '';
  courseDetails: any = [];
  authorDetails: any = [];
  authors: any = [];
  duration: string = "00:00 hours";
  constructor(private fb: FormBuilder) {
    this.courseForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      duration: new FormControl('', [Validators.required,]),
      authorname: new FormControl('')
    });
   }

   ngOnInit(): void {
  }
   SaveCourse() {}
   createAuthor() {}
   deleteAuthor(index: number) {
    this.authors.removeAt(index);
  }

  logout(){}


}
