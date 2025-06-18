import { HttpClient } from "@angular/common/http";
import { Component, inject, OnInit } from "@angular/core";
import { CommonModule } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationService } from "../core/navigation.service";
import { RouterLink } from "@angular/router";

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    imports: [CommonModule, RouterLink],
    providers: [NavigationService],
})
export class HeaderComponent {
    title = 'Blog Posts';

    constructor(private http: HttpClient) {}

    private readonly navigationService = inject(NavigationService);
    public navigation = this.navigationService.getNavigation();
}