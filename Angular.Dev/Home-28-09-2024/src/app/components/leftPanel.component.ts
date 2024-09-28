import { Component, effect, Input, OnInit, signal } from "@angular/core";
import { SignalService } from "../services/signal";
import RxJSUtilityService from "../services/RxJS.service";

@Component({
    selector: '[left-panel]',
    standalone: true,
    templateUrl: './left-panel.html',
    styleUrls: ['./left-panel.css']

})

export class LeftPanel implements OnInit{
    @Input('left-panel') fromParentData: any;
    public counter!: number;
    constructor(private rxjsUtilityService: RxJSUtilityService, private signalService: SignalService) {
        
    }
    updateOb: any = { first: 'Pr', last: 'Kumar', n: 12 };
    
    ngOnInit(): void {
        //console.log(this.fromParentData)
        //this.fromParentData.name = 'Kumar'
        this.counter = this.signalService.getCouterSignal();
        this.rxjsUtilityService.updateObject.subscribe(res => {
            //console.log(res);
            this.updateOb = res;
        });
        //this.updateOb = { first: 'Pramod-Left', last: 'Kumar-Left', n: 12 };
        this.rxjsUtilityService.updateObject.next({ first: 'Pramod-Left', last: 'Kumar-Left', n: 12 });
    }
    getSignalCounter() {
        this.counter = this.signalService.getCouterSignal();
        
    }
    updateSignal() {
        this.signalService.updateCouterSignal();
        this.getSignalCounter();
    }
}
