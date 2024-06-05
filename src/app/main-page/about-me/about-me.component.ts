import { Component } from '@angular/core';
import { ButtonComponent } from '../../shared/button/button.component';
import { ViewportScroller } from '@angular/common';


@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {

  constructor(private scroller: ViewportScroller) {
    
  }

  ngOnInit() {

  }

  navigateTo(link: string) {
    this.scroller.scrollToAnchor(link);
    // this.router.navigate([], { fragment: link });
  }
}
