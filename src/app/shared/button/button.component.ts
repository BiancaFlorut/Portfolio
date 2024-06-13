import { Component, Input, inject } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  
  @Input() buttonText: string = 'Button';
  @Input() link: string = '';
  @Input() disabled: boolean = false;
  @Input() class: string = '';
  @Input() anchor: string = '';

  private scroller = inject(ViewportScroller);

  scrollTo(id: string) {
    this.scroller.setOffset([0, 60]);
    this.scroller.scrollToAnchor(id);
  }
}
