import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: '[left-panel]',
    standalone: true,
    templateUrl: './left-panel.html',
    styleUrls: ['./left-panel.css']

})

export class LeftPanel implements OnInit{
    @Input('left-panel') fromParentData: any;
    constructor() {}
    ngOnInit(): void {
        //console.log(this.fromParentData)
        //this.fromParentData.name = 'Kumar'
    }
}