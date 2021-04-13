import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mproducts } from './models/mproducts.module';
import { BaseHttp } from './services/basehttp';

@Injectable({
  providedIn: 'root'
})
export class MproductsService extends BaseHttp{

  constructor(public http: HttpClient) { 
    super(http, 'products');
  }

  
  private getUrl(url: string): string {
    return this.baseUrl + url;
}

private get(url: string): Observable<any> {
    return this.http.get(this.getUrl(url));
}

private post(url: string, data: any): Observable<any> {
    return this.http.post(this.getUrl(url), data);
}

private put(url: string, data: any): Observable<any> {
    return this.http.put(this.getUrl(url), data);
}

private delete(url: string): Observable<any> {
    return this.http.delete(this.getUrl(url));
}

  public getAll():Promise<Mproducts> {
    return this.get(`${this.path}`).toPromise();
}

public getOneById(id: number):Promise<Mproducts> {
    return this.get(`${this.path}/${id}`).toPromise();
}

public postOne(data: any):Promise<Mproducts> {
    return this.post(`${this.path}`, data).toPromise();
}

public putOne(id: number, data: any): Promise<Mproducts> {
    return this.put(`${this.path}/${id}`, data).toPromise();
}

public deleteOneById(id: number):Promise<Mproducts> {
    return this.delete(`${this.path}/${id}`).toPromise();
}
}
