import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthorStoreService } from 'src/app/services/author-store.service';
import { CoursesStoreService } from 'src/app/services/courses-store.service';
import { AuthorStateFacade } from 'src/app/store/author/authors.facade';
import { CoursesStateFacade } from 'src/app/store/courses/courses.facade';

@Component({
  selector: 'app-course-add',
  templateUrl: './course-add.component.html',
  styleUrls: ['./course-add.component.css']
})
export class CourseAddComponent implements OnInit {
  courseForm: FormGroup;
  authors: any = [];

  constructor(private fb: FormBuilder, 
    private courseStoreService: CoursesStateFacade,
    private router: Router, private authorStoreService: AuthorStateFacade
    ) {
    this.courseForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      duration: new FormControl(0, [Validators.required]),
      authorname: new FormControl('')
    })
   }

  ngOnInit(): void {
  }
  SaveCourse() {
    this.courseForm.markAllAsTouched();
    if (this.courseForm.errors == null) {
      this.courseForm.value.authors = this.authors;
      this.courseStoreService.createCourse(this.courseForm.value);
      this.courseStoreService.errorMessage$.subscribe(error => {
        if (error == "") {
          this.router.navigate(['/courses']);
        }
        else {
          alert(error);
        }
      })

    }
  }

  createAuthor() {
    const authorForm = new FormGroup({
      name: new FormControl(this.courseForm.get('authorname')?.value, [Validators.required,
      Validators.pattern(/^([a-zA-Z]+|[\u10D0-\u10F0]+)$/)])
    });
    if (!authorForm.invalid) {
      this.authorStoreService.addAuthor(authorForm.value);
      this.authorStoreService.addedAuthor$.subscribe((addedAuthor: any) => {
        if (Object.keys(addedAuthor).length > 0) {
          console.log(addedAuthor.id);
          this.authors = [...this.authors, addedAuthor.id];
        }
      })
      // this.authorStoreService.addAuthor(authorForm.value).subscribe((res: any) => {
      //   this.authors.push(res.id);
      // });
    }
  }

  deleteAuthor(lessonIndex: number) {
    this.authors.removeAt(lessonIndex);
  }

}
