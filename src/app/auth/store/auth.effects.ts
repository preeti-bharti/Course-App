import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { requestLogin, requestLoginFail, requestLoginSuccess, requestLogout, requestLogoutSuccess, requestRegister, requestRegisterFail, requestRegisterSuccess } from './auth.actions';
@Injectable()
export class AuthEffects {
    login$ = createEffect(() =>
        this.actions$.pipe(
            ofType(requestLogin),
            mergeMap((action) => this.authService.login(action.user)
                .pipe(
                    map((response: any) => (requestLoginSuccess({ token: response.result }))),
                    catchError((error) => of(requestLoginFail({ errorMessage: error })))
                )
            )
        )
    );
    register$ = createEffect(() =>
        this.actions$.pipe(
            ofType(requestRegister),
            mergeMap((action) => this.authService.Register(action.user)
                .pipe(
                    map(() => (requestRegisterSuccess())),
                    catchError((error) => of(requestRegisterFail({ errorMessage: error })))
                )
            )
        )
    );
    logout$ = createEffect(() =>
        this.actions$.pipe(
            ofType(requestLogout),
            mergeMap(() => this.authService.logout()
                .pipe(
                    map(() => (requestLogoutSuccess()))
                )
            )
        )
    );

    constructor(
        private actions$: Actions,
        private authService: AuthService
    ) { }
}

