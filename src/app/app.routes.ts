import { Routes } from '@angular/router';
import { ProductListComponent } from './product/product-list/product-list.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    {
        path:'products',
       loadComponent:()=>import('./product/product-list/product-list.component')
                            .then(p=>p.ProductListComponent)
    },
    {
        path:'home',
        loadComponent:()=>import('./home/home.component')
                            .then(h=>h.HomeComponent)
    },
    {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
    },
    {
        path:'**',
        loadComponent:()=>import('./page-not-found/page-not-found.component')
                            .then(n=>n.PageNotFoundComponent)
    }
];
