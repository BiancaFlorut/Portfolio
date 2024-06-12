import { Component, ElementRef, HostListener, ViewChild, inject } from '@angular/core';
import { AboveTheFoldComponent } from './above-the-fold/above-the-fold.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillSetComponent } from './skill-set/skill-set.component';
import { MyWorkComponent } from './my-work/my-work.component';
import { ContactComponent } from './contact/contact.component';
import { ScrollService } from '../services/scroll.service';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [AboveTheFoldComponent, AboutMeComponent, SkillSetComponent, MyWorkComponent, ContactComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {
  @ViewChild('appContact', { read: ElementRef }) contact!: ElementRef;
  @ViewChild('appMyWork', { read: ElementRef }) myWork!: ElementRef;
  @ViewChild('appSkillSet', { read: ElementRef }) skillSet!: ElementRef;
  @ViewChild('appAboutMe', { read: ElementRef }) aboutMe!: ElementRef;


  scrollService = inject(ScrollService);

  @HostListener('document:scroll', ['$event'])
  public onViewportScroll() {
    // ⤵️ Captures / defines current window height when called
    const windowHeight = window.innerHeight;
    // // ⤵️ Captures bounding rectangle of 5th element
    const data = [
      {id: 'contact', elem: this.contact}, 
      {id: 'myWork', elem: this.myWork},
      {id: 'skillSet', elem: this.skillSet},
      {id: 'aboutMe', elem: this.aboutMe}
    ];
    this.scrollService.onViewportScroll(data, windowHeight);
  }
  

}
