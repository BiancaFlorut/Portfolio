import { CommonModule, ViewportScroller } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, TranslateModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isMenuOpen = false;
  languages = ['en', 'de', 'ro'];
  translateService = inject(TranslateService);
  scrollService = inject(ScrollService);
  router = inject(Router);

  constructor(private readonly scroller: ViewportScroller) { }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  async navigateTo(id: string) {

    if (this.router.url != '/') {
      await this.router.navigate(['/']);
    }
    setTimeout(() => {
      this.scroller.setOffset([0, 60]);
    this.scroller.scrollToAnchor(id);
    }, 50);
    
    this.closeMenu();
  }

  ngOnInit(): void {
    const defaultLanguage = localStorage.getItem('lang') || 'de';
    this.translateService.setDefaultLang(defaultLanguage);
    this.translateService.use(defaultLanguage);
  }

  changeLanguageAndCloseMenu(language: string) {
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

  changeLanguage(language: string) {
    this.translateService.use(language);
    localStorage.setItem('lang', language);
  }

  async goToFragment(id: string) {
    if (this.router.url != '/') {
      await this.router.navigate(['/']);
    }
    setTimeout(() => {
      this.scroller.scrollToAnchor(id);
    }, 50);
  }

}
