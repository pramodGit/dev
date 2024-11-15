import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";


@Injectable({
    providedIn: 'root'
})

export default class RxJSUtilityService {
    exclusive = new Subject<boolean>();
    toggleBtn = new Subject<boolean>();
    updateObject = new Subject<Object>();
    _count = new BehaviorSubject<number>(0);
    count$ = this._count.asObservable();
    
    increment() {
        this._count.next(this._count.value + 1);
    }
    decrement() {
        this._count.next(this._count.value - 1);
    }
}