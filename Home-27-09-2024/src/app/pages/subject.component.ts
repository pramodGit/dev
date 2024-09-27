import { Component, OnInit } from '@angular/core';
import RxJSUtilityService from '../services/RxJS.service';

@Component({
  selector: 'subject',
  standalone: true,
  templateUrl: './subject.component.html',
  styleUrl: './subject.component.css'
})
export class subjectComponent implements OnInit {
  
  title = 'subject';
  count: any;
  constructor(private rxjsUtilityService: RxJSUtilityService) {}
  ngOnInit(): void {
    // Subscribe to BehaviorSubject
    this.rxjsUtilityService.count$.subscribe(res => {
      this.count = res;
    });
    this.rxjsUtilityService.exclusive.next(true);
  }
  increment() {this.rxjsUtilityService.increment();}
  decrement() {this.rxjsUtilityService.decrement();}
  ngOnDestroy(): void {
    this.rxjsUtilityService.exclusive.next(false);
  }
}
