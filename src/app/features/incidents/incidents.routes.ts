import { Routes } from '@angular/router';

const incidentsRoute: Routes = [
    {
        path: '',
        loadComponent: () => import('./list/list.component').then(m => m.ListComponent),
    }
];

export default incidentsRoute;
