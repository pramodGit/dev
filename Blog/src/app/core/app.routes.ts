import { Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './auth/login.component';
import { AuthGuard } from './auth/auth.guard';
import { RegisterComponent } from './auth/register.component';
import { RoleGuard } from './auth/role.guard';
import { LayoutComponent } from '../layout/layout.component';
import { PostComponent } from '../components/post/post.component';
import { AdminLayoutComponent } from '../components/admin/admin-layout.component';

export const routes: Routes = [
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    {
        path: '',
        // canActivate:[AuthGuard],
        component: LayoutComponent,
        children: [
            {
                path: '',
                // redirectTo: 'dashboard' // Default route
                loadComponent: () => import('../components/dashboard/blog.component').then(m => m.BlogComponent)
            },
            // { 
            //     path: 'dashboard', 
            //     loadComponent: () => import('../components/dashboard/blog.component').then(m => m.BlogComponent)
            // },
            {
                path: 'admin123',
                // canActivate: [RoleGuard],
                // data: { role: 'Admin' },
                loadComponent: () => import('../components/admin/admin.component').then(m => m.AdminBlogComponent)
            },
            {
                path: 'admin',
                component: AdminLayoutComponent,
                // canActivate: [RoleGuard],
                // data: { role: 'Admin' },
                children: [
                    {
                        path: 'dashboard',
                        loadComponent: () => import('../components/admin/dashboard/admin-dashboard.component').then(m => m.AdminDashboardComponent)
                    },
                    {
                        path: 'posts',
                        loadComponent: () => import('../components/admin/posts/admin-posts.component').then(m => m.AdminPostsComponent)
                    },
                    {
                        path: 'users',
                        loadComponent: () => import('../components/admin/users/admin-users.component').then(m => m.AdminUsersComponent)
                    }
                ]
            },
            { path: 'test', component: NotFoundComponent },
            { path: 'post/:route', component: PostComponent },
        ]
    },
    { path: '**', redirectTo: '' }
];
