import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import {  RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isMenuOpen = false;

  constructor(private readonly scroller: ViewportScroller) { }



  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  navigateTo(id: string) {
    this.scroller.scrollToAnchor(id);
    const svgElement = document.getElementById('menu');
    svgElement?.click();
    const animate = document.getElementById('reverse');
    if (animate && animate instanceof SVGAnimateElement) {
      animate.beginElement();
    }
    
  }

}
