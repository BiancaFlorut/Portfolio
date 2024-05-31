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
    },
    {
      name: 'Sharkie',
      img: './assets/project imgs/sharkie.png',
      tech: ['JavaScript', 'HTML', 'CSS'],
      description: 'Swim, run and throw game based on object-oriented approach. Help Sharkie to find coins and poison bottles to fight against the Orca.',
      link: 'https://github.com/BiancaFlorut/Sharkie'
    },
    {
      name: 'Pokédex',
      img: './assets/project imgs/pokedex.png',
      tech: ['JavaScript', 'HTML', 'CSS', 'API'],
      description: 'Based on the PokéAPI a simple library that provides and catalogues pokémon information.',
      link: 'https://github.com/BiancaFlorut/Pokedex'
    }
  ]
}
