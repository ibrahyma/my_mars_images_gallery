import { Component, OnInit } from '@angular/core';
import { GalleryManagerService } from '../services/gallery-manager.service';

@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit
{
    constructor() { }

    ngOnInit(): void { }
}
