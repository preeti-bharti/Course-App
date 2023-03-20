import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { AuthorsService } from 'src/app/services/authors.service';
import { requestAddAuthor, requestAddAuthorFail, requestAddAuthorSuccess, requestAuthors, requestAuthorsFail, requestAuthorsSuccess } from './authors.actions';
@Injectable()
export class AuthorEffects {
    getAuthors$ = createEffect(() =>
        this.actions$.pipe(
            ofType(requestAuthors),
            mergeMap(() => this.authorService.getAll()
                .pipe(
                    map((response: any) => (requestAuthorsSuccess({ authors: response }))),
                    catchError((error) => of(requestAuthorsFail()))
                )
            )
        )
    );
    addAuthor$ = createEffect(() =>
        this.actions$.pipe(
            ofType(requestAddAuthor),
            mergeMap((action) => this.authorService.addAuthor(action.author)
                .pipe(
                    map((response: any) => (requestAddAuthorSuccess({ addedAuthors: response }))),
                    catchError(() => of(requestAddAuthorFail()))
                )
            )
        )
    );

    constructor(
        private actions$: Actions,
        private authorService: AuthorsService
    ) { }
}

