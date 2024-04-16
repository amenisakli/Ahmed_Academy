import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Professeur } from './professeur';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfesseurService {

  constructor(private httpClient:HttpClient) { }
  getProfesseur():Observable<Professeur[]>{
    return this.httpClient.get<Professeur[]>(environment.api +'professeur')
  }
  getProfesseurById(id:number){
    return this.httpClient.get(environment.api +'professeur/' +id)
  }
  addProfesseur(professeur:any){
    return this.httpClient.post(environment.api +'professeur/' ,professeur)
  }
  deletetProfesseur(id:number){
    return this.httpClient.delete(environment.api +'professeur/' +id)
  }
  updateProfesseur(professeur:Professeur,id:number){
    return this.httpClient.patch(environment.api +'professeur/'+id ,professeur)
  }
}
