import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit
{
    @Input() activeRoute: string = "";

    routes = [
        { class: "nav-link", href: "/", value: "Accueil" },
        { class: "nav-link", href: "/photos", value: "Photos" },
        { class: "nav-link", href: "/gallery", value: "Galerie" },
    ];

    constructor() { }

    ngOnInit(): void
    {
        for (let link of this.routes)
        {
            if (link.href !== this.activeRoute) continue;
            link.class += " active"; break;
        }
    }
}
