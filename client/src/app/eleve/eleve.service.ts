import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Eleve } from './eleve';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EleveService {

  constructor(private httpClient:HttpClient) { }
  getEleve():Observable<Eleve[]>{
    return this.httpClient.get<Eleve[]>(environment.api +'eleve')
  }
  getEleveById(id:number){
    return this.httpClient.get(environment.api +'eleve/' +id)
  }
  addEleve(eleve:any){
    return this.httpClient.post(environment.api +'eleve/' ,eleve)
  }
  deletetEleve(id:number){
    return this.httpClient.delete(environment.api +'eleve/' +id)
  }
  updateEleve(eleve:any,id:number){
    return this.httpClient.patch(environment.api +'eleve/'+id ,eleve)
  }
  geteleveByProfMat(idProf:any,idMat:any, idGrp:any):Observable<Eleve[]>{
    return this.httpClient.get<Eleve[]>(environment.api +'eleve/ProfMat/'+idProf+'/'+ idMat+'/'+idGrp )
  }
}
