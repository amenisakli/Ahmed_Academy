import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Groupe } from './groupe';
import { GroupeService } from './groupe.service';

@Component({
  selector: 'app-groupe',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './groupe.component.html',
  styleUrls: ['./groupe.component.css']
})
export class GroupeComponent implements OnInit{
  groupe : Groupe | any 
SelectedidGrp!: any
showModalGrp:boolean = false
 constructor (private groupeService:GroupeService){}
  ngOnInit(): void {
    this.groupeService.getGroupe().subscribe(data =>{
      this.groupe = data.sort((a:any, b:any) => b.id - a.id);
    })
  }
openGroupe(id:any){
  this.SelectedidGrp = id 
  this.showModalGrp = true
}
SupprimerGrp(){
  this.groupeService.deleteGroupe(this.SelectedidGrp).subscribe(data => {
    window.location.href = window.location.href
    this.showModalGrp = false
  })
}
}
