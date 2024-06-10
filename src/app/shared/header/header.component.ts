import { ViewportScroller } from '@angular/common';
import { Component, inject } from '@angular/core';
import {  RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isMenuOpen = false;
  languages = ['en', 'de', 'ro'];
  private translateService = inject(TranslateService);

  constructor(private readonly scroller: ViewportScroller) { }



  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  navigateTo(id: string) {
    this.scroller.scrollToAnchor(id);
    this.closeMenu();
  }

  ngOnInit(): void {
    const defaultLanguage = localStorage.getItem('lang') || 'de';
    this.translateService.setDefaultLang(defaultLanguage);
    this.translateService.use(defaultLanguage);
  }

  changeLanguage(language: string) {
    this.translateService.use(language);
    localStorage.setItem('lang', language);
    this.closeMenu();
  }

  closeMenu() {
    const svgElement = document.getElementById('menu');
    svgElement?.click();
    const animate = document.getElementById('reverse');
    if (animate && animate instanceof SVGAnimateElement) {
      animate.beginElement();
    }
  }

}
