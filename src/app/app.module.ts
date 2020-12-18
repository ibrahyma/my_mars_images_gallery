import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListImagesComponent } from './list-images/list-images.component';
import { ListImagesItemComponent } from './list-images-item/list-images-item.component';
import { DateInputComponent } from './date-input/date-input.component';
import { GetMarsImagesService } from './services/get-mars-images.service';
import { HomePageComponent } from './home-page/home-page.component';
import { ImagesRetrieverComponent } from './images-retriever/images-retriever.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ListImagesFromGalleryComponent } from './list-images-from-gallery/list-images-from-gallery.component';
import { ListImagesFromComponentItemComponent } from './list-images-from-component-item/list-images-from-component-item.component';
import { GalleryManagerService } from './services/gallery-manager.service';

@NgModule({
    declarations: [
        AppComponent,
        ListImagesComponent,
        ListImagesItemComponent,
        DateInputComponent,
        HomePageComponent,
        ImagesRetrieverComponent,
        NavbarComponent,
        GalleryComponent,
        ListImagesFromGalleryComponent,
        ListImagesFromComponentItemComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule
    ],
    providers: [GetMarsImagesService, GalleryManagerService],
    bootstrap: [AppComponent]
})
export class AppModule { }
