import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { headerComponent } from './components/header.component';
import { LeftPanel } from './components/leftPanel.component';
import { RightPanel } from './components/rightPanel.component';
import { footerComponent } from './components/footer.component';
import { RxJSUtilityService } from './services/RxJS.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, headerComponent, LeftPanel, RightPanel, footerComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'newFeaturesOf18';
  sideBarData = {
    name: 'Pramod',
    class: 'show'
  };
  toggleBtn:Boolean = true;
  constructor(private rxjsUtilityService: RxJSUtilityService) {}
  sideBarShowHide() {
    if(this.sideBarData.class === 'hide') {
      this.sideBarData.name = 'Pramod';
      this.sideBarData.class = '';
    } else {
      this.sideBarData.name = 'Hidden';
      this.sideBarData.class = 'hide';
    }
  }
  ngOnInit(): void {
    this.rxjsUtilityService.toggleBtn.subscribe(res => {
      this.toggleBtn = res;
    });
  }
}
