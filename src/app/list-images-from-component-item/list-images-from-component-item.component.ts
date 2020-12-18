import { Component, Input, OnInit } from '@angular/core';
import { GalleryManagerService } from '../services/gallery-manager.service';

@Component({
    selector: 'app-list-images-from-component-item',
    templateUrl: './list-images-from-component-item.component.html',
    styleUrls: ['./list-images-from-component-item.component.css']
})

export class ListImagesFromComponentItemComponent implements OnInit
{
    @Input() id: string;
    name: string;
    full_name: string;
    img_src: string;

    constructor(private galleryManagerService: GalleryManagerService) { }

    ngOnInit(): void
    {
        let photo = this.galleryManagerService.getPhotoById(this.id);
        console.log("Id", this.id);
        console.log("Photo", photo);
        this.name = photo.name;
        this.full_name = photo.full_name;
        this.img_src = photo.img_src;
    }

    deleteImageHandler()
    {
        this.galleryManagerService.deletePhoto(this.id);
    }
}
