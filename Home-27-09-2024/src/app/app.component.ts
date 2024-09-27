import { Component, DestroyRef, effect, inject, Inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { headerComponent } from './components/header.component';
import { LeftPanel } from './components/leftPanel.component';
import { RightPanel } from './components/rightPanel.component';
import { footerComponent } from './components/footer.component';
import RxJSUtilityService from './services/RxJS.service';
import RxJsObservable from './services/RxJS.observable';
import { NgIf } from '@angular/common';
import { map } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, headerComponent, LeftPanel, RightPanel, footerComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Pramod.Angular.Dev';
  sideBarData = {
    name: 'Pramod',
    class: 'show'
  };
  toggleBtn:Boolean = true;
  clickCount = signal(0);
  constructor(private rxjsUtilityService: RxJSUtilityService, private rxjsObservable: RxJsObservable ) {
    effect(() => {
      console.log(`Signal Button Clicked ${this.clickCount} times.`);
    });
  }
  sideBarShowHide() {
    if(this.sideBarData.class === 'hide') {
      this.sideBarData.name = 'Pramod';
      this.sideBarData.class = '';
    } else {
      this.sideBarData.name = 'Hidden';
      this.sideBarData.class = 'hide';
    }
    const subscription = this.rxjsObservable.foo$.pipe(
      map((val: any) => val * 2)
    ).subscribe({
      next: (x: any) => { console.log(x) }
    });
    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }
  private destroyRef = inject(DestroyRef);
  ngOnInit(): void {
    this.rxjsUtilityService.toggleBtn.subscribe({next: (res: Boolean) => {
      this.toggleBtn = res;
    }});
    
  }
  onSignalClick() {
    this.clickCount.update(prevCount => prevCount + 1);
  }
}
