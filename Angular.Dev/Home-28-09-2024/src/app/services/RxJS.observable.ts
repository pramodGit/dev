import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


@Injectable({
    providedIn: 'root'
})

export default class RxJsObservable {
   foo$ = new Observable<Number>((subscriber) => {
    subscriber.next(42);
    subscriber.next(24);
   });
}
