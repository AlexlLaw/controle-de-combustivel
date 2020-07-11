import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const api = 'http://localhost:8080/revendedor/DadosAgrupadosDataDistribuidora';

@Injectable({
  providedIn: 'root'
})
export class CombustivelListDadService {

  constructor(private http: HttpClient ) { }

  listar():Observable<any> {
    console.log(api)
    return this.http.get<any>(api)
  }
}
