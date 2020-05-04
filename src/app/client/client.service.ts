import { Injectable } from '@angular/core';
import { ResponseClients, RequestCreate, ResponseCreate, RequestUpdate, ResponseClient } from './client.model';
import { HttpClient, HttpResponse } from "@angular/common/http";
import { Observable } from 'rxjs';
import { identifierModuleUrl } from '@angular/compiler';
import { ok } from 'assert';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private url = 'https://localhost:44330/client';

  constructor(private http: HttpClient) { }

  getClients(): Observable<ResponseClients>{
    return this.http.get<ResponseClients>(this.url);
  }

  createClient(request: RequestCreate): Observable<ResponseCreate>{
    return this.http.post<ResponseCreate>(this.url, request);
  }
  
  getClient(id: string): Observable<ResponseClient>{
    const _url = `${this.url}/${id}`
    return this.http.get<ResponseClient>(_url);
  }

  updateClient(id: string, request: RequestUpdate): Observable<any>{
    const _url = `${this.url}/${id}`
    return this.http.put<any>(_url, request);
  }

  deleteClient(id: string): Observable<any>{
    const _url = `${this.url}/${id}`
    return this.http.delete<any>(_url);
  }
}
