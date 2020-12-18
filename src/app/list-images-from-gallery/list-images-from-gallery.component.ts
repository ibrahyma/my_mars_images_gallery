import { Component, OnInit } from '@angular/core';
import { GalleryManagerService } from '../services/gallery-manager.service';

@Component({
    selector: 'app-list-images-from-gallery',
    templateUrl: './list-images-from-gallery.component.html',
    styleUrls: ['./list-images-from-gallery.component.css']
})

export class ListImagesFromGalleryComponent implements OnInit
{
    photosId: string[];

    constructor(private galleryManagerService: GalleryManagerService) { }

    ngOnInit(): void { this.photosId = Object.keys(this.galleryManagerService.getPhotos()); }
}
