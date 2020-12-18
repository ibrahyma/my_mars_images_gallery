import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ImagesRetrieverComponent } from './images-retriever/images-retriever.component';

const routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'photos', component: ImagesRetrieverComponent },
    { path: 'gallery', component: GalleryComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
