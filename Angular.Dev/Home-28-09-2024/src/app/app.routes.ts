import { Routes } from '@angular/router';

export const routes: Routes = [
    // {
    //     path: 'login',
    //     loadComponent: () => import('../app/pages/login.component').then(m => m.LoginComponent)
    // },
    {
        path: 'subject',
        loadComponent: () => import('../app/pages/subject.component').then(m => m.subjectComponent),
        //canActivate: [AuthGuard]
    },
    {
        path: 'other',
        loadComponent: () => import('../app/pages/other.component').then(m => m.otherComponent),
        //canActivate: [AuthGuard]
    }
];
