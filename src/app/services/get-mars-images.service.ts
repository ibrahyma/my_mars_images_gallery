import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class GetMarsImagesService
{
	private BASE_API_URL: string = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos";
	private API_KEY: string = "S6ltes0MI8QbE6wgobGEbm4t5lKp1OCKVqBEex94";
    
	constructor(private httpClient : HttpClient) { }

	getMarsImagesByDateFromAPI(aaaammjjDate: string)
	{
		return this.httpClient.get(`${this.BASE_API_URL}?earth_date=${aaaammjjDate}&api_key=${this.API_KEY}`);
	}
}
