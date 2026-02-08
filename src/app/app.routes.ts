import { Routes } from '@angular/router';
import { Home } from './comp/home/home';
import { Main } from './comp/main/main';
import { About } from './comp/about/about';

export const routes: Routes = [
  {path:'', component:Main},
  {path:'food', component:Home},
  {path:'about', component:About},
 
];
