import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ImprintComponent } from './imprint/imprint.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent, ImprintComponent, TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'portfolio';
  languages = ['en', 'de', 'ro'];
  private translateService = inject(TranslateService);


  ngOnInit(): void {
    const defaultLanguage = localStorage.getItem('lang') || 'de';
    this.translateService.setDefaultLang(defaultLanguage);
    this.translateService.use(defaultLanguage);
  }

  changeLanguage(language: string) {
    this.translateService.use(language);
    localStorage.setItem('lang', language);
  }
}
  
  
