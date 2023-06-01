import { Routes } from "@angular/router";

export const appRoutes: Routes = [
    {
        path: '',
        loadChildren: () => {
            return import('./pages/home/home.module').then((homeModuleFile) => homeModuleFile.HomeModule)
        }
    },
    {
        path: 'custom-components',
        loadChildren: () => {
            return import('./pages/custom-components/custom-components.module').then((customComponentsModuleFile) => customComponentsModuleFile.CustomComponentsModule)
        }
    },
    {
        path: 'about',
        loadChildren: () => {
            return import('./pages/about/about.module').then((aboutModuleFile) => aboutModuleFile.AboutModule)
        }
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    }
];