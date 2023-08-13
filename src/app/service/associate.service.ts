import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Associates } from '../Model/AssociateModel';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AssociateService {

  constructor(private http: HttpClient) {

  }
  BaseUrl = 'http://localhost:3000/associate';

  GetAll(){
   return this.http.get<Associates[]>(this.BaseUrl);
  }

  GetAllbyCode(code: number){
   return this.http.get<Associates>(this.BaseUrl + "/" + code);
  }

  Create(inputdata:Associates){
   return this.http.post(this.BaseUrl,inputdata);
  }

  Update(inputdata:Associates){
   return this.http.put(this.BaseUrl+ "/" + inputdata.id,inputdata);
  }

  Delete(code:number){
   return this.http.delete(this.BaseUrl+ "/" + code);
  }
}
