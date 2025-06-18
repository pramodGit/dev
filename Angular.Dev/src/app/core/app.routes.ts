import { Routes } from '@angular/router';
import { NotFoundComponent } from '../core/not-found/not-found.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { ToDoComponent } from '../components/todo/to-do.component';

export const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'todo', component: ToDoComponent },
    { path: '', loadComponent: () => import('../components/qa/qa.component').then(m => m.QuestionsAnswers)},
    { path: '**', component: NotFoundComponent }
];