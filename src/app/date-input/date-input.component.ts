import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-date-input',
    templateUrl: './date-input.component.html',
    styleUrls: ['./date-input.component.css']
})
export class DateInputComponent implements OnInit
{
    date: string;
    validable: boolean = false;
    @Input() onClickHandler;

    constructor() { }

    onChange() { this.validable = this.date !== ""; }

    ngOnInit(): void { }
}
