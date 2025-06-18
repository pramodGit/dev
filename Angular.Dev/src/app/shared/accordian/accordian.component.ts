import { Component, Input } from '@angular/core';
import { AccordionItem } from '../../models/accordian-item.model';
import { NgClass, NgFor, NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordian.component.html',
  imports: [NgFor, NgIf, NgClass]
})
export default class AccordionComponent {
  @Input() items: AccordionItem[] = [];
  openIndex: number | null = null;

  toggle(index: number): void {
    this.openIndex = this.openIndex === index ? null : index;
  }

  isOpen(index: number): boolean {
    return this.openIndex === index;
  }
  isArray(val: any): val is string[] {
    return Array.isArray(val);
  }
}
