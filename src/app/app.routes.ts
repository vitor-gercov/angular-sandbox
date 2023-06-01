import { Routes } from "@angular/router";

export const appRoutes: Routes = [
    {
        path: '',
        loadChildren: () => {
            return import('./pages/home/home.module').then((homeModuleFile) => homeModuleFile.HomeModule)
        }
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    }
];