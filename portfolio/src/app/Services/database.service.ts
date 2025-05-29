import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ComponentModel } from '../Models/component.model';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private apiUrl = 'http://localhost:3000/components';
  constructor(private http: HttpClient) { }

  getComponents(): Observable<any> {
    return this.http.get<any>(this.apiUrl)
  }

  getComponent(id?: string): Observable<any> {
    // const params = new HttpParams({ id: id });
    return this.http.get<any>(`${this.apiUrl}`, {
      params: {
      id: `${id}`
    },
  })
  }

  deleteComponent(id?: string): Observable<any> {
    console.log('Delete req sent to server')
    console.log(id)
    return this.http.delete<any>(`${this.apiUrl}`, {
      params: {
      id: `${id}`
      },
    })
  }

  addComponent(component: ComponentModel): Observable<any> {
    console.log(`add req sent to server`)
    console.log(component)
        let id: string = component.id
        let name: string = component.name
        let photo_uri: string = component.photo_uri
        let description: string = component.description
        let info: string = component.info
        let created_at: string = component.created_at
        let version: string | undefined = component.version || 'V6.6.6'
        let price: number | undefined = component.price || 6.66
        let stock: number | undefined = component.stock || 66
    return this.http.post<any>(`${this.apiUrl}`, {
      params: {
            name: `${name}`,
            photo_uri: `${photo_uri}`,
            description: `${description}`,
            info: `${info}`,
            version: `${version}`,
            price: `${price}`,
            stock: `${stock}`
        }
      },
    )
  }}
