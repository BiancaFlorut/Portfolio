import { Component } from '@angular/core';
import { ProjectComponent } from './project/project.component';
import { Project } from '../../models/project.interface';

@Component({
  selector: 'app-my-work',
  standalone: true,
  imports: [ProjectComponent],
  templateUrl: './my-work.component.html',
  styleUrl: './my-work.component.scss'
})
export class MyWorkComponent {
  projects: Project[] = [
    {
      name: 'Join',
      img: './assets/project imgs/join.png',
      tech: ['JavaScript', 'HTML', 'CSS', 'Scrum'],
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      link: 'https://github.com/BiancaFlorut/Join-Standalone'
    }
  ]
}
