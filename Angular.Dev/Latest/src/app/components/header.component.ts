import { Component, OnInit } from "@angular/core";
import { navigationComponent } from "./navigation.component";


@Component({
    selector: '.header',
    standalone: true,
    templateUrl: './header.html',
    styleUrl: './header.css',
    imports: [navigationComponent]
})

export class headerComponent implements OnInit {
    
    constructor() {}
    
    ngOnInit(): void {
        
    }
} 