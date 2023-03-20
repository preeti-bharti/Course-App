import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { requestCurrentUser } from "./user.actions";
import { UserState } from "./user.reducer";
import { usersQuery } from "./user.selectors";

@Injectable({
  providedIn: 'root'
})
export class UserFacade {
  name$ = this.store.select(usersQuery.getName);
  isAdmin$ = this.store.select(usersQuery.isAdmin);

  constructor(private store: Store<UserState>) {}

  RequestCurrentUser() {
    this.store.dispatch(requestCurrentUser());
  }
}
