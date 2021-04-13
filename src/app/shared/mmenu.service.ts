import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mmenu } from './models/mmenu.model';
import { BaseHttp } from './services/basehttp';

@Injectable({
  providedIn: 'root'
})
export class MmenuService extends BaseHttp{

  constructor(public http: HttpClient) { 
    super(http, 'menu');
  }

  private getUrl(url: string): string {
    return this.baseUrl + url;
}

private get(url: string): Promise<any> {
    return this.http.get(this.getUrl(url)).toPromise();
}

private post(url: string, data: any): Promise<any> {
    return this.http.post(this.getUrl(url), data).toPromise();
}

private put(url: string, data: any): Promise<any> {
    return this.http.put(this.getUrl(url), data).toPromise();
}

private delete(url: string): Promise<any> {
    return this.http.delete(this.getUrl(url)).toPromise();
}

  public getAll():Promise<Mmenu> {
    return this.get(`${this.path}`);
}

public getOneById(id: number):Promise<Mmenu> {
    return this.get(`${this.path}/${id}`);
}

public postOne(data: any):Promise<Mmenu> {
    return this.post(`${this.path}`, data);
}

public putOne(id: number, data: any): Promise<Mmenu> {
    return this.put(`${this.path}/${id}`, data);
}

public deleteOneById(id: number):Promise<Mmenu> {
    return this.delete(`${this.path}/${id}`);
}
}
