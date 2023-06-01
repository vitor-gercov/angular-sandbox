import { Routes } from "@angular/router";

export const appRoutes: Routes = [
    {
        path: '',
        loadChildren: () => {
            return import('./pages/home/home.module').then((homeModuleFile) => homeModuleFile.HomeModule)
        }
    },
    {
        path: 'about',
        loadChildren: () => {
            return import('./pages/about/about.module').then((aboutModuleFile) => aboutModuleFile.AboutModule)
        }
    },
    {
        path: 'custom-components',
        loadChildren: () => {
            return import('./pages/custom-components/custom-components.module').then((customComponentsModuleFile) => customComponentsModuleFile.CustomComponentsModule)
        }
    },
    {
        path: 'form-composer',
        loadChildren: () => {
            return import('./pages/form-composer/form-composer.module').then((formComposerModuleFile) => formComposerModuleFile.FormComposerModule)
        }
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    }
];