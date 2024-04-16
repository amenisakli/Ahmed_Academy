import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Groupe } from './groupe';

@Injectable({
  providedIn: 'root'
})
export class GroupeService {

  constructor(public http: HttpClient){}

  addGroupe(groupe:any){
    return this.http.post(environment.api + 'groupe' , groupe)
  }
getGroupeById(id:number){
  return this.http.get(environment.api +'groupe/'+id)
}
  updateGroupe(id:number , groupe:Groupe):Observable<Groupe[]>{
    return this.http.patch<Groupe[]>(environment.api + 'groupe/' + id , groupe)
  }
  getGroupe():Observable<Groupe[]>{
    return this.http.get<Groupe[]>(environment.api + 'groupe')
  }
  deleteGroupe(id:number):Observable<Groupe>{
    return this.http.delete<Groupe>(environment.api + 'groupe/'+ id)
  }
}
