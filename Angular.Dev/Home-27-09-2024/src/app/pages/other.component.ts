import { Component } from '@angular/core';
import RxJSUtilityService from '../services/RxJS.service';
import RxJSObservable from '../services/RxJS.observable';

@Component({
  selector: 'other',
  standalone: true,
  templateUrl: './other.component.html',
  styleUrl: './other.component.css'
})
export class otherComponent {
  title = 'other page';
  constructor(private rxjsUtilityService: RxJSUtilityService, private rxjsObservable: RxJSObservable) {}
  ngOnInit(): void {
    this.rxjsUtilityService.exclusive.next(false);
    this.rxjsObservable.foo$.subscribe((x: any) => {
      console.log("n ", x);
    });
  }
  ngOnDestroy(): void {
    this.rxjsUtilityService.exclusive.next(true);
  }
}
