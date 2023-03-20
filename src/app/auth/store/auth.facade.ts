import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { UserModel } from "../services/auth.service";
import { SessionStorageService } from "../services/session-storage.service";
import { requestLogin, requestLoginSuccess, requestLogout, requestLogoutSuccess, requestRegister } from "./auth.actions";
import { AuthState } from "./auth.reducer";
import { authsQuery } from "./auth.selectors";

@Injectable({
    providedIn: 'root'
})
export class AuthStateFacade {
    isAuthorized$ = this.store.select(authsQuery.isUserAuthorized);
    getToken$ = this.store.select(authsQuery.getToken);
    getLoginErrorMessage$ = this.store.select(authsQuery.getSpecificErrorMessage);

    constructor(private store: Store<AuthState>, private sessionStorage: SessionStorageService) { }

    login(user: UserModel) {
        this.store.dispatch(requestLogin({ user: user }));
    }
    register(user: UserModel) {
        this.store.dispatch(requestRegister({ user: user }));
    }
    logout() {
        this.store.dispatch(requestLogout());
    }
    closeSession() {
        this.store.dispatch(requestLogoutSuccess());
    }
    setAuthorization() {
        this.store.dispatch(requestLoginSuccess({ token: this.sessionStorage.getToken() }));
    }
}
