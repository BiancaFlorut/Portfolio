import { Component } from '@angular/core';
import { ProjectComponent } from './project/project.component';
import { Project } from '../../models/project.interface';
import { LangChangeEvent, TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-my-work',
  standalone: true,
  imports: [ProjectComponent, TranslateModule],
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
      link: 'http://join.bianca-florut.com/',
      github: 'https://github.com/BiancaFlorut/Join-Standalone'
    },
    {
      name: 'Sharkie',
      img: './assets/project imgs/sharkie.png',
      tech: ['JavaScript', 'HTML', 'CSS'],
      description: 'Swim, run and throw game based on object-oriented approach. Help Sharkie to find coins and poison bottles to fight against the Orca.',
      github: 'https://github.com/BiancaFlorut/Sharkie',
      link: 'http://sharkie.bianca-florut.com/'
    },
    {
      name: 'Pokédex',
      img: './assets/project imgs/pokedex.png',
      tech: ['JavaScript', 'HTML', 'CSS', 'API'],
      description: 'Based on the PokéAPI a simple library that provides and catalogues pokémon information.',
      github: 'https://github.com/BiancaFlorut/Pokedex',
      link: 'http://pokedex.bianca-florut.com/'
    }
  ];

  constructor(private translate: TranslateService) {
    this.updateProjects();
  }


  ngOnInit(): void {
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.updateProjects();
    });
  }

  updateProjects() {
    this.projects.forEach(project => {
      this.translate.get("myWork.projects." + project.name + ".description").subscribe((res: string) => {
        project.description = res;
      });
    });
  }
}
