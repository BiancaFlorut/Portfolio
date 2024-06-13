import { Component, inject } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-success-message',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './success-message.component.html',
  styleUrl: './success-message.component.scss'
})
export class SuccessMessageComponent {
  router = inject(Router);
  goBack() {
    this.router.navigate(['']);
  }
}
