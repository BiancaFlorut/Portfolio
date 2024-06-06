import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-above-the-fold',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './above-the-fold.component.html',
  styleUrl: './above-the-fold.component.scss'
})
export class AboveTheFoldComponent {

  constructor(private translate: TranslateService) {}
  getTranslatedText(key: string) {
    return this.translate.instant(key);
  }
  
  getLangStyleClass() {
    switch (this.translate.currentLang) {
      case 'en':
        return 'en';
      case 'de':
        return 'de';
      case 'ro':
        return 'ro';
      default:
        return 'en';
    }
  }
}
