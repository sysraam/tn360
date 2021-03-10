import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})


export class HttpService
{
    constructor(private http:HttpClient){}

    getAll(url:string)
    {
        return this.http.get('http://localhost/');
    }

}
