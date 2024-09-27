import { Component, effect, Input, OnInit, signal } from "@angular/core";
import { SignalService } from "../services/signal";

@Component({
    selector: '[left-panel]',
    standalone: true,
    templateUrl: './left-panel.html',
    styleUrls: ['./left-panel.css']

})

export class LeftPanel implements OnInit{
    @Input('left-panel') fromParentData: any;
    public counter!: number;
    constructor(private signalService: SignalService) {
        
    }
    
    
    ngOnInit(): void {
        //console.log(this.fromParentData)
        //this.fromParentData.name = 'Kumar'
        this.counter = this.signalService.getCouterSignal();
    }
    getSignalCounter() {
        this.counter = this.signalService.getCouterSignal();
        
    }
    updateSignal() {
        this.signalService.updateCouterSignal();
        this.getSignalCounter();
    }
}
