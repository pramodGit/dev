import { Component, OnInit } from "@angular/core";
import RxJSUtilityService from "../services/RxJS.service";
import { SignalService } from "../services/signal";

@Component({
    selector: 'right-panel',
    standalone: true,
    templateUrl: './right-panel.html',
    styleUrls: ['./right-panel.css']

})

export class RightPanel implements OnInit{
    count: any;
    counter!: number;
    profile: any = { first: 'Right', last: '', n: 1 };
    constructor(private rxjsUtilityService: RxJSUtilityService, private signalService: SignalService) {}
    ngOnInit(): void {
        this.rxjsUtilityService.count$.subscribe(res => {
            this.count = res;
        });
        // this.rxjsUtilityService.updateObject.subscribe(res => {
        //     console.log(res);
        //     this.profile = res;
        // });
        this.rxjsUtilityService.updateObject.next({ first: 'Pramod-Right12', last: 'Kumar-Right', n: 24 });
        this.counter = this.signalService.getCouterSignal();
        
    }
    increment() {this.rxjsUtilityService.increment();}
    decrement() {this.rxjsUtilityService.decrement();}
    getSignalCounter() {
        this.counter = this.signalService.getCouterSignal();
        
    }
    updateSignal() {
        this.signalService.updateCouterSignal();
        this.getSignalCounter();
    }
}