import { Routes } from '@angular/router';
import { BukuList } from './buku-list/buku-list';
import { AboutPage } from './about-page/about-page';
import { BukuForm } from './buku-form/buku-form';

export const routes: Routes = [
    { path: 'buku-list', component: BukuList },
    { path: 'about-page', component: AboutPage },
    { path: 'tambah-buku', component: BukuForm }
];
