import { 
  AfterContentChecked, 
  AfterContentInit, 
  AfterViewChecked, 
  AfterViewInit, 
  Component, 
  DoCheck, 
  Input, 
  OnChanges, 
  OnDestroy, 
  OnInit, 
  SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements 
OnInit,
OnChanges,
DoCheck,
AfterContentChecked,
AfterContentInit,
AfterViewChecked,
AfterViewInit,
OnDestroy {
  constructor() {
    console.log("==== LifeCycle START ======");
    console.log("ChildComponent :-1 Constructor called");
  }
  @Input() title: string = "Hello World";
  ngOnChanges(changes: SimpleChanges): void {
    console.log("ChildComponent :-2 ngOnChanges called on Input Decorator", changes);
  }
  ngOnInit(): void {
    console.log("ChildComponent :-3 ngOnInit called");
  }
  ngDoCheck(): void {
    console.log("ChildComponent :-4 ngDoCheck called");
  }
  ngAfterContentInit(): void {
    console.log("ChildComponent :-5 ngAfterContentInit called");
  }
  ngAfterContentChecked(): void {
    console.log("ChildComponent :-6 ngAfterContentChecked called");
  }
  ngAfterViewInit(): void {
    console.log("ChildComponent :-7 ngAfterViewInit called");
  }
  ngAfterViewChecked(): void {
    console.log("ChildComponent :-8 ngAfterViewChecked called");
  }
  ngOnDestroy(): void {
    console.log("ChildComponent :-9 ngOnDestroy called");
    console.log("==== LifeCycle END ======");
  }
}
