import { Component, inject } from '@angular/core';
import { FormControl, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from '../../shared/button/button.component';
import { HttpClient } from '@angular/common/http';
import { LangChangeEvent, TranslateModule, TranslateService } from '@ngx-translate/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, ButtonComponent, TranslateModule, RouterLink, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  formData = {
    name: '',
    email: '',
    message: ''
  };
  privacyPolicyChecked = false;
  checkbox = 'unchecked';
  nameLabelOnFocus = false;
  emailLabelOnFocus = false;
  messageLabelOnFocus = false;

  namePlaceholder = 'Your name';
  emailPlaceholder = 'Your email';
  messagePlaceholder = 'Your message';

  nameError = false;
  mailTest = false;

  emailControl = Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}');

  http = inject(HttpClient);

  post = {
    endPoint: '/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };
  router = inject(Router);

  constructor(private translate: TranslateService) {
    this.changePlaceholders();
  }

  ngOnInit() {
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.changePlaceholders();
    });
  }

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.formData))
        .subscribe({
          next: (response) => {

            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => {console.info('send post complete'); this.router.navigate(['success-message']);},
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      ngForm.resetForm();
      this.router.navigate(['success-message']);
      
    }
  }

  onFocus(input: string) {
    switch (input) {
      case 'name': {
        this.nameLabelOnFocus = true;
        this.namePlaceholder = '';
        break;
      }
      case 'email': {
        this.emailLabelOnFocus = true;
        this.emailPlaceholder = '';
        break;
      }
      case 'message': {
        this.messageLabelOnFocus = true;
        this.messagePlaceholder = '';
        break;
      }
      default: {
        this.nameLabelOnFocus = false;
        this.emailLabelOnFocus = false;
        this.messageLabelOnFocus = false;
        break;
      }
    }
  }

  changePlaceholders() {
    if (this.namePlaceholder != '')
    this.translate.get("contact.labelName").subscribe((res: string) => {
      this.namePlaceholder = res;
    });
    if (this.emailPlaceholder != '')
    this.translate.get("contact.labelEmail").subscribe((res: string) => {
      this.emailPlaceholder = res;
    });
    if (this.messagePlaceholder != '')
    this.translate.get("contact.labelMessage").subscribe((res: string) => {
      this.messagePlaceholder = res;
    });
  }

  toggleCheckbox() {
    if (this.privacyPolicyChecked) {
      this.privacyPolicyChecked = false;
      this.checkbox = 'unchecked';

    } else {
      this.privacyPolicyChecked = true;
      this.checkbox = 'checked';
    }
  }

}
