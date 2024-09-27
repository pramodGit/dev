import { effect, Injectable, signal } from "@angular/core";


@Injectable({
    providedIn: 'root'
})

export class SignalService {
    counter = signal(0);
    constructor() {
        effect(() => {
            console.log(`Signal Button Clicked ${this.counter} times.`);
        });
    }
    updateCouterSignal() {
        this.counter.update(prevCount => prevCount + 2);
    }
    getCouterSignal() {
        return this.counter();
    }
}
