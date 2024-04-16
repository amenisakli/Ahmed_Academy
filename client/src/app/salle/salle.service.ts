import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Salle } from './salle';

@Injectable({
  providedIn: 'root'
})
export class SalleService {

  constructor(public http: HttpClient){}

  addSalle(salle:any){
    return this.http.post(environment.api + 'salle' , salle)
  }
getSalleById(id:number){
  return this.http.get(environment.api +'salle/'+id)
}
  updateSalle(id:number , salle:Salle):Observable<Salle[]>{
    return this.http.patch<Salle[]>(environment.api + 'salle/' + id , salle)
  }
  getSalle():Observable<Salle[]>{
    return this.http.get<Salle[]>(environment.api + 'salle')
  }
  deleteSalle(id:number):Observable<Salle>{
    return this.http.delete<Salle>(environment.api + 'salle/'+ id)
  }
}
