import { Routes } from '@angular/router';
import { HomeComponent } from './companents/pages/home/home.component';
import { NotfoundComponent } from './companents/notfound/notfound.component';

export const routes: Routes = [
  {path: "", title: "Home page", component: HomeComponent},
  {path: "home", title: "Home page", component: HomeComponent},
  {path: "**", title: "Not Found", component: NotfoundComponent},
];