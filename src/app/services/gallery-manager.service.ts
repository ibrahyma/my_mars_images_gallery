import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class GalleryManagerService
{
    constructor()
    {
        if (!localStorage.getItem("photos")) localStorage.setItem("photos", JSON.stringify({}));
    }

    addPhoto(arrayOfAnyPhoto: Object)
    {
        let id: string = arrayOfAnyPhoto["id"];

        if (this.photoExists(id)) throw 'Cette photo est déjà dans votre galerie.';
        
        let photos = this.objectNotationData();
        let name = arrayOfAnyPhoto["name"];
        let img_src = arrayOfAnyPhoto["img_src"];
        let full_name = arrayOfAnyPhoto["full_name"];

        photos[id] = {
            name: name, img_src: img_src, full_name: full_name
        };

        localStorage.setItem("photos", JSON.stringify(photos));

        console.log("Photos", this.getPhotos());
    }

    deletePhoto(id: string)
    {
        let photos = this.objectNotationData();
        delete photos[id];
        localStorage.setItem("photos", JSON.stringify(photos));
    }
    
    getPhotoById(id: string)
    {
        return this.objectNotationData[id];
    }

    getPhotos() { return this.objectNotationData(); }

    private objectNotationData() { return JSON.parse(localStorage.getItem("photos")); }

    photoExists(id: string) { return this.objectNotationData()[id] !== undefined ? true : false; }
}
