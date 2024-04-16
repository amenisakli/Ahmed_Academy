import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Matiere } from './matiere';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MatiereService {

  constructor(private httpClient:HttpClient) { }
  getMatiere():Observable<Matiere[]>{
    return this.httpClient.get<Matiere[]>(environment.api+'matiere')
  }
  getMatiereById(id:any){
    return this.httpClient.get(environment.api +'matiere/' + id)
  }
  addMatiere(matiere:Matiere){
    return this.httpClient.post(environment.api + 'matiere/' ,matiere)
  }
  updateMatiere(id:any,matiere:Matiere){
    return this.httpClient.patch(environment.api +'matiere/' +id , matiere)
  }
  deleteMatiere(id:number){
    return this.httpClient.delete(environment.api +'matiere/' +id)
  }
}
