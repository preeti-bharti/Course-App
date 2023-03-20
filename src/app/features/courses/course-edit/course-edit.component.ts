import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthStateFacade } from 'src/app/auth/store/auth.facade';
import { AuthorStateFacade } from 'src/app/store/authors/authors.facade';
import { CoursesStateFacade } from 'src/app/store/courses/courses.facade';

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
  constructor(private fb: FormBuilder, private activatedRoute: ActivatedRoute,
    private courseStoreService: CoursesStateFacade,
    private authorStoreService: AuthorStateFacade,
    private authService: AuthStateFacade) {
      this.authorStoreService.getAuthors();
    this.authorStoreService.auhtors$.subscribe(data => { this.authorDetails = data });
    this.courseForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      duration: new FormControl('', [Validators.required,]),
      authorname: new FormControl('')
    });
   }

   ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.courseId = params['id'];
    });
    this.courseStoreService.getSingleCourse(this.courseId);

    this.courseStoreService.course$.subscribe((data: any) => {
      this.courseForm.patchValue(data);
      this.authors = data.authors;
    })
  }
  SaveCourse() {
    this.courseForm.markAllAsTouched();
    this.courseForm.value.authors = this.authors;
    this.courseStoreService.editCourse(this.courseId, this.courseForm.value);
  }
  createAuthor() {
    const authorForm = new FormGroup({
      name: new FormControl(this.courseForm.get('authorname')?.value, [Validators.required,
      Validators.pattern(/^([a-zA-Z]+|[\u10D0-\u10F0]+)$/)])
    });
    if (!authorForm.invalid) {
      this.authorStoreService.addAuthor(authorForm.value);
      this.authorStoreService.addedAuthor$.subscribe((res: any) => {
        if (Object.keys(res).length > 0) {
          console.log(res.id);
          this.authors = [...this.authors, res.id];
        }
      });
    }
  }

  deleteAuthor(index: number) {
    this.authors.removeAt(index);
  }
  logout() {
    console.log('logout');
    this.authService.logout();
    this.authService.closeSession();
  }
}
