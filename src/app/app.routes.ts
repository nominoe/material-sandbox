import { Routes } from '@angular/router';
import { TestComponent } from './pages/test/test.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './layout/layout.component';

export const menuRoutes: Routes = [
  {
    path: 'home',
    title: 'Accueil',
    data: { icon: 'home' },
    component: HomeComponent,
  },
  {
    path: 'login',
    title: 'Connexion',
    data: { icon: 'login' },
    component: LoginComponent,
  },
  {
    path: 'test',
    title: 'Test',
    data: { icon: 'quiz' },
    component: TestComponent,
  },
];

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: menuRoutes,
  },
];
