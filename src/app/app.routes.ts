import { Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { ImpressComponent } from './impress/impress.component';

export const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'impress', component: ImpressComponent}
];
