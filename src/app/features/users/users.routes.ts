import { Routes } from '@angular/router';

const usersRoute:Routes = [
    {
        path: '',
        loadComponent: () => import('./list/list.component').then(m => m.ListComponent),
    }
];

export default usersRoute;
