import { ElementRef, EventEmitter, HostListener, Injectable, Output, ViewChild } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  isAboutMeInView = false;
  isSkillSetInView = false;
  isMyWorkInView = false;
  isContactInView = false;

  constructor() { }
  onViewportScroll(data: {id: string, elem: ElementRef}[], windowHeight: number) {
    data.forEach(({id, elem}) => {
      const boundingElement = elem.nativeElement.getBoundingClientRect();
    if (boundingElement.top < windowHeight - 350 && boundingElement.bottom > 350) {
      this.toggleMenuLink(id);
      return;
    } 
    })
  }

  toggleMenuLink(component: string) {
    this.resetLinks();
    switch (component) {
      case 'aboutMe': {
        this.isAboutMeInView = true; break;
      }
      case 'skillSet': {
        this.isSkillSetInView = true;
        
        break;
      }
      case 'myWork': {
        this.isMyWorkInView = true; break;
      }
      case 'contact': {
        this.isContactInView = true; break;
      }
    }
  }
  resetLinks() {
    this.isAboutMeInView = false;
    this.isSkillSetInView = false;
    this.isMyWorkInView = false;
    this.isContactInView = false;
  }
}
