import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = 'http://localhost:8000/';
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private http: HttpClient) { }

  getAllEspecialidades() : Observable<any>{
    return this.http.get(this.baseUrl + 'especialidades',
    {headers: this.httpHeaders });
  }
  getMedicosEspecialidade(especialidade) : Observable<any>{
    return this.http.get(this.baseUrl + 'medicos/?especialidade=' + especialidade.id,
    {headers: this.httpHeaders });
  }

}
