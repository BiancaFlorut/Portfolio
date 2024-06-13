import {  Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ImprintComponent } from './imprint/imprint.component';
import { SuccessMessageComponent } from './shared/success-message/success-message.component';

export const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'imprint', component: ImprintComponent},
  { path: 'privacy', component: PrivacyPolicyComponent},
  { path: 'success-message', component: SuccessMessageComponent}
];
