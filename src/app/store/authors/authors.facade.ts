import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { requestAddAuthor, requestAuthors } from "./authors.actions";
import { AuthorsState } from "./authors.reducer";
import { authorsQuery } from "./authors.selectors";

@Injectable()
export class AuthorStateFacade {
    auhtors$ = this.store.select(authorsQuery.getAuthors);
    addedAuthor$ = this.store.select(authorsQuery.getAddedAuthors);

    constructor(private store: Store<AuthorsState>) { }

    getAuthors() {
        this.store.dispatch(requestAuthors());
    }
    addAuthor(author: any) {
        this.store.dispatch(requestAddAuthor({ author: author }));
    }
}
