import { Component, OnInit, Input } from '@angular/core';
import { GalleryManagerService } from '../services/gallery-manager.service';

@Component({
    selector: 'app-list-images-item',
    templateUrl: './list-images-item.component.html',
    styleUrls: ['./list-images-item.component.css']
})

export class ListImagesItemComponent implements OnInit
{
    @Input() item;
    existsOnGalery: boolean;

    constructor(private galleryManagerService: GalleryManagerService) { }

    ngOnInit(): void
    {
        this.existsOnGalery = this.galleryManagerService.photoExists(this.item["id"]);
    }

    addImageHandler()
    {
        try
        {
            this.galleryManagerService.addPhoto({
                id: this.item["id"],
                name: this.item.camera.name,
                full_name: this.item.camera.full_name,
                img_src: this.item.img_src
            });
        }
        catch (error)
        {
            alert(`Echec de l'ajout : ${error.message}`);
        }
    }

    deleteImageHandler()
    {
        this.galleryManagerService.deletePhoto(this.item["id"]);
    }
}
