import {  Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { ImpressComponent } from './impress/impress.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

export const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'impress', component: ImpressComponent},
  { path: 'privacy', component: PrivacyPolicyComponent}
];
