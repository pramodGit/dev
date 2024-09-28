import { Component, OnInit } from "@angular/core";
import { CounterControlsComponent } from "../store/counter-controls.component";
import { AsyncPipe } from "@angular/common";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { selectCount, selectDoubleCount } from "../store/counter.selectors";

@Component({
    selector: '.footer',
    standalone: true,
    templateUrl: './footer.html',
    styleUrl: './footer.css',
    imports: [AsyncPipe, CounterControlsComponent]
})

export class footerComponent implements OnInit {
    count$: Observable<number>;
    doubleCount$: Observable<number>;
    constructor(store: Store<{counter: number}>) {
        this.count$ = store.select(selectCount);
        this.doubleCount$ = store.select(selectDoubleCount);
    }
    ngOnInit(): void {
        
    }
}
export class CounterOutputComponent {
    
    
    constructor() {
        //this.count$ = store.select('counter');
        
    }
}