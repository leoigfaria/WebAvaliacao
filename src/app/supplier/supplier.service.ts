import { Injectable } from '@angular/core';
import { ResponseSuppliers, RequestCreate, ResponseCreate, RequestUpdate, ResponseSupplier } from './supplier.model';
import { HttpClient, HttpResponse } from "@angular/common/http";
import { Observable } from 'rxjs';
import { identifierModuleUrl } from '@angular/compiler';
import { ok } from 'assert';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  private url = 'https://localhost:44330/supplier';

  constructor(private http: HttpClient) { }

  getSuppliers(): Observable<ResponseSuppliers>{
    return this.http.get<ResponseSuppliers>(this.url);
  }

  createSupplier(request: RequestCreate): Observable<ResponseCreate>{
    return this.http.post<ResponseCreate>(this.url, request);
  }
  
  getSupplier(id: string): Observable<ResponseSupplier>{
    const _url = `${this.url}/${id}`
    return this.http.get<ResponseSupplier>(_url);
  }

  updateSupplier(id: string, request: RequestUpdate): Observable<any>{
    const _url = `${this.url}/${id}`
    return this.http.put<any>(_url, request);
  }

  deleteSupplier(id: string): Observable<any>{
    const _url = `${this.url}/${id}`
    return this.http.delete<any>(_url);
  }
}
