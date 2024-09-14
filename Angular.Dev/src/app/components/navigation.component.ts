import { Component, OnInit } from "@angular/core";
import { RxJSUtilityService } from "../services/RxJS.service";
import { NgIf } from "@angular/common";
import { RouterLink } from '@angular/router';

@Component({
    selector: 'navigation',
    standalone: true,
    templateUrl: './navigation.html',
    imports: [NgIf, RouterLink]
})

export class navigationComponent implements OnInit {
    exclusive:Boolean = false;
    constructor(private rxjsUtilityService: RxJSUtilityService) {}
    ngOnInit(): void {
        this.rxjsUtilityService.exclusive.subscribe(res => {
            this.exclusive = res;
        })
    }
} 