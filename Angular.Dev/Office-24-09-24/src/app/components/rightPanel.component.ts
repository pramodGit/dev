import { Component, OnInit } from "@angular/core";
import { RxJSUtilityService } from "../services/RxJS.service";

@Component({
    selector: 'right-panel',
    standalone: true,
    templateUrl: './right-panel.html',
    styleUrls: ['./right-panel.css']

})

export class RightPanel implements OnInit{
    count: any;
    constructor(private rxjsUtilityService: RxJSUtilityService) {}
    ngOnInit(): void {
        this.rxjsUtilityService.count$.subscribe(res => {
            this.count = res;
        });
    }
}