import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import Navigation from "../models/navigation.model";


@Injectable({
    providedIn: 'root'
})
export class NavigationService{
    private readonly http: HttpClient = inject(HttpClient);
    navigation:Navigation[] = [{"link": "IoT", "title": "IoT", "active": "true"}];
    public getNavigation(): Navigation[] {
        return this.navigation;
    }
}