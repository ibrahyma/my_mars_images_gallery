import { Component, OnInit } from '@angular/core';
import { GetMarsImagesService } from '../services/get-mars-images.service';

@Component({
    selector: 'app-images-retriever',
    templateUrl: './images-retriever.component.html',
    styleUrls: ['./images-retriever.component.css']
})

export class ImagesRetrieverComponent implements OnInit
{
    date: string;
    marsPhotos: any = [];
    onClick: Function;

    constructor(private getMarsImagesService: GetMarsImagesService) { }

    ngOnInit()
    {
        this.onClick = () =>
        {
            this.getMarsImagesService.getMarsImagesByDateFromAPI(this.date).subscribe(
                response => this.marsPhotos = response["photos"].length > 0 ? response["photos"] : null,
                () => this.marsPhotos = false
            );
        }
    }
}
