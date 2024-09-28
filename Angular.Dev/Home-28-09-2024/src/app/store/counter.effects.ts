import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { of, switchMap, tap, withLatestFrom } from "rxjs";

import { decrement, increment, init, set } from "./counter.actions";
import { selectCount } from "./counter.selectors";

@Injectable()
export class CounterEffects {
    constructor(private actions$: Actions, private store: Store<{counter: number}>) {}
    loadCount$ = createEffect(
        () => this.actions$.pipe(
            ofType(init),
            switchMap(() => {
                const storedCounter = sessionStorage.getItem('count');
                if (storedCounter) {
                    return of(set({ value: + storedCounter }));
                }
                return of(set({ value: 0 }));
            })
        )
    );
    saveCount$ = createEffect(
        () => this.actions$.pipe(
            ofType(increment, decrement),
            withLatestFrom(this.store.select(selectCount)),
            tap(([action, counter]) => {
                console.log(action);
                sessionStorage.setItem('count', counter.toString());
            })
        ),
        { dispatch: false }
    );
}