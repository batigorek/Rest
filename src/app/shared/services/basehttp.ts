import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

export class BaseHttp {
    baseUrl = 'http://localhost:3000/';
    constructor(public http: HttpClient, public path: string) {}

    

    
}