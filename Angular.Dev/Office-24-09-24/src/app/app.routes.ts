import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'subject',
        loadComponent: () => import('../app/pages/subject.component').then(m => m.subjectComponent)
    },
    {
        path: 'other',
        loadComponent: () => import('../app/pages/other.component').then(m => m.otherComponent)
    }
];
