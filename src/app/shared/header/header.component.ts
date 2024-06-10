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

  constructor() { }


  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  navigateTo(id: string) {
    let target = document.getElementById(id);
    target?.scrollIntoView({ behavior: 'smooth' });
    const svgElement = document.getElementById('menu');
    svgElement?.click();
    const animate = document.getElementById('reverse');
    console.log(animate);
    if (animate && animate instanceof SVGAnimateElement) {
      animate.beginElement();
    }
    
  }

}
