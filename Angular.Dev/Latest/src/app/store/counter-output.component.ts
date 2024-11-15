import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { AsyncPipe } from "@angular/common";
import { CounterControlsComponent } from "./counter-controls.component";
import { selectCount, selectDoubleCount } from "./counter.selectors";


@Component({
    selector: 'app-counter-output',
    templateUrl: './counter-output.component.html',
    styleUrls: ['./counter-output.component.css'],
    standalone: true,
    imports: [AsyncPipe, CounterControlsComponent]
})

export class CounterOutputComponent {
    count$: Observable<number>;
    doubleCount$: Observable<number>;
    
    constructor(private store: Store<{counter: number}>) {
        //this.count$ = store.select('counter');
        this.count$ = store.select(selectCount);
        this.doubleCount$ = store.select(selectDoubleCount);
    }
}