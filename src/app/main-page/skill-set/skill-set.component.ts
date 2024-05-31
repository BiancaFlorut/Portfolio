import { Component } from '@angular/core';

@Component({
  selector: 'app-skill-set',
  standalone: true,
  imports: [],
  templateUrl: './skill-set.component.html',
  styleUrl: './skill-set.component.scss'
})
export class SkillSetComponent {
  imageFormatSVG = '.svg';
  imageFormatPNG = '.png';
  webSkills = ['Angular', 'TypeScript', 'JavaScript', 'HTML', 'Scrum', 'Firebase', 'GIT', 'CSS', 'Rest-Api', 'Material design'];
  otherSkills = ['Java'];
  skills: { name: string, srcName: string }[] = [];

  constructor() {
    for (const skill of this.webSkills) {
      this.skills.push({ name: skill, srcName: skill + this.imageFormatSVG });
    }
    for (const skill of this.otherSkills) {
      this.skills.push({ name: skill, srcName: skill + this.imageFormatPNG });
    }
  }
}
