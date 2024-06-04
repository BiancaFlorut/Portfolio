import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../../shared/button/button.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, ButtonComponent],
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

  onFocus(input: any) {
    input.value += 'hello';
    console.log(input.value);
    
  }

  onSubmit() {
    console.log('submitted');
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
