import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProfesseurService } from './professeur.service';
import { Professeur } from './professeur';

@Component({
  selector: 'app-professeur',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './professeur.component.html',
  styleUrls: ['./professeur.component.css']
})
export class ProfesseurComponent implements OnInit{
  professeur : Professeur | any
  SelectedidProf: any
  showModalProf: boolean = false
  constructor(private professeurService:ProfesseurService){}
  ngOnInit(): void {
    this.professeurService.getProfesseur().subscribe(data =>{
      this.professeur = data.sort((a:any,b:any)=> b.id - a.id)
    })
  }
  openProf(id: any) {
    this.SelectedidProf = id
    this.showModalProf = true
  }
  SupprimerProf() {
    this.professeurService.deletetProfesseur(this.SelectedidProf).subscribe(() => {
      window.location.href = window.location.href
      this.showModalProf = false
    })
  }
}
