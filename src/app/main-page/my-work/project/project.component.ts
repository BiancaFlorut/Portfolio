import { Component, Input, Output } from '@angular/core';
import { Project } from '../../../models/project.interface';
import { ButtonComponent } from '../../../shared/button/button.component';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
  @Input() project: Project | undefined;
  @Input() rowReverse: boolean = false;

  openLink(link:string) {
    window.open(link, '_blank');
  }
}
