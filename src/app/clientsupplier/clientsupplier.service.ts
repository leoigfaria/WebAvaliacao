import { Injectable } from '@angular/core';
import { ResponseClientSuppliers, RequestCreate, ResponseCreate, ResponseClientSupplier } from './clientsupplier.model';
import { HttpClient, HttpResponse } from "@angular/common/http";
import { Observable } from 'rxjs';
import { identifierModuleUrl } from '@angular/compiler';
import { ok } from 'assert';

@Injectable({
  providedIn: 'root'
})
export class ClientsupplierService {

  private url = 'https://localhost:44330/clientsupplier';

  constructor(private http: HttpClient) { }

  getClientSuppliers(): Observable<ResponseClientSuppliers>{
    return this.http.get<ResponseClientSuppliers>(this.url);
  }

  createClientSupplier(request: RequestCreate): Observable<ResponseCreate>{
    return this.http.post<ResponseCreate>(this.url, request);
  }
  
  getClientSupplier(id: string): Observable<ResponseClientSupplier>{
    const _url = `${this.url}/${id}`
    return this.http.get<ResponseClientSupplier>(_url);
  }

  deleteClientSupplier(id: string): Observable<any>{
    const _url = `${this.url}/${id}`
    return this.http.delete<any>(_url);
  }
}
