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
import { CounterOutputComponent } from './store/counter-output.component';
import { Store } from '@ngrx/store';
import { init } from './store/counter.actions';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgIf, RouterOutlet, headerComponent, LeftPanel, RightPanel, ChildComponent, footerComponent, CounterOutputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Pramod.Angular.Dev';
  titleValue: any;
  hiddenFlag: boolean = true;
  SubmitHandle(t1: any) {
    console.log("called SubmitHandle");
    this.titleValue = t1.value;
  }
  HideComp() {
    this.hiddenFlag = false;
  }
  sideBarData = {
    name: 'Pramod',
    class: 'show'
  };
  toggleBtn:Boolean = true;
  clickCount = signal(0);
  constructor(
    private rxjsUtilityService: RxJSUtilityService, 
    private rxjsObservable: RxJsObservable,
    private store: Store
  ) {
    effect(() => {
      //console.log(`Signal Button Clicked ${this.clickCount} times.`);
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
    this.store.dispatch(init());
  }
  onSignalClick() {
    this.clickCount.update(prevCount => prevCount + 1);
  }
}
