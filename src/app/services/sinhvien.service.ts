import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sinhvien } from '../models/sinhvien.model';

const baseUrl = 'http://localhost:8080/api/sinhvienls';

@Injectable({
  providedIn: 'root',
})
export class SinhvienService {
  constructor(private http: HttpClient) {}
  getAll(): Observable<Sinhvien[]> {
    return this.http.get<Sinhvien[]>(baseUrl);
  }
  get(id: any): Observable<Sinhvien> {
    return this.http.get(`${baseUrl}/${id}`);
  }
  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }
  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }
  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
    20;
  }
  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }
  findByKhoa(khoa: any): Observable<Sinhvien[]> {
    return this.http.get<Sinhvien[]>(`${baseUrl}?khoa=${khoa}`);
  }
}
