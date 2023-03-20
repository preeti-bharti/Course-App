import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { UserService } from '../services/user.service';
import { requestCurrentUser, requestCurrentUserFail, requestCurrentUserSuccess } from './user.actions';
@Injectable()
export class UserEffects {
    loadUser$ = createEffect(() =>
        this.actions$.pipe(
            ofType(requestCurrentUser),
            mergeMap(() => this.userService.getUser()
                .pipe(
                    map((response: any) => (requestCurrentUserSuccess({ user: response.result }))),
                    catchError(() => of(requestCurrentUserFail()))
                )
            )
        )
    );

    constructor(
        private actions$: Actions,
        private userService: UserService
    ) { }
}

