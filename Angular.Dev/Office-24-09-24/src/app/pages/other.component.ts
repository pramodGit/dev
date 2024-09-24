import { Component } from '@angular/core';
import { RxJSUtilityService } from '../services/RxJS.service';

@Component({
  selector: 'other',
  standalone: true,
  templateUrl: './other.component.html',
  styleUrl: './other.component.css'
})
export class otherComponent {
  title = 'other page';
  constructor(private rxjsUtilityService: RxJSUtilityService) {}
  ngOnInit(): void {
    this.rxjsUtilityService.exclusive.next(false);
  }
  ngOnDestroy(): void {
  }
}
