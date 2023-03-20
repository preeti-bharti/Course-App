import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, distinctUntilChanged, map, takeUntil } from 'rxjs';
import { AuthorsService } from './authors.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorStoreService implements OnInit {
  private isLoading$$ = new BehaviorSubject(false);
  private authors$$ = new BehaviorSubject({});
  public isLoading$ = this.isLoading$$.asObservable();
  public authors$ = this.authors$$.asObservable().pipe(distinctUntilChanged());

  constructor(private authorService: AuthorsService) {
  }
  ngOnInit(): void {

  }

  getAll() {
    this.startLoading();
    this.authorService.getAll().subscribe(data => {
      this.authors$$.next(data);
      this.stopLoading()
    })
  }
  addAuthor(authorObj: any) {
    this.startLoading();
    return this.authorService.addAuthor(authorObj).pipe(map(res => {
      this.authors$$.next(this.authorService.getAll());
      this.stopLoading();
      return res;
    }));
  }
  startLoading() {
    this.isLoading$$.next(true);
  }
  stopLoading() {
    this.isLoading$$.next(false);
  }
}
