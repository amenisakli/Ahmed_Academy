import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Groupe } from 'src/app/groupe/groupe';
import { Matiere } from 'src/app/matiere/matiere';
import { Professeur } from 'src/app/professeur/professeur';
import { Eleve } from '../eleve';
import { GroupeService } from 'src/app/groupe/groupe.service';
import { MatiereService } from 'src/app/matiere/matiere.service';
import { ProfesseurService } from 'src/app/professeur/professeur.service';
import { EleveService } from '../eleve.service';
import { group } from '@angular/animations';

@Component({
  selector: 'app-update',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterModule],
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements  OnInit{
  eleveForm = new FormGroup({
    name: new FormControl(''),
    lastname: new FormControl(''),
    tel: new FormControl(''),
    telParent: new FormControl(''),
    matiereId: new FormControl(''),
    groupeId: new FormControl(''),
    ProfId: new FormControl(''),

  });
  matiere : Matiere | any
  professeur :Professeur | any
  groupe : Groupe | any
  eleve : Eleve | any
showAlert : boolean = false
id:any
constructor (
  private professeurService:ProfesseurService,
  private matiereService:MatiereService,
  private groupeService:GroupeService,
  private eleveService:EleveService,
  private router:ActivatedRoute
){}
  ngOnInit(): void {
    this.router.paramMap.subscribe(params =>{
      this.id = Number(params.get('id'))
      this.eleveService.getEleveById(this.id).subscribe(data =>{
        this.eleve = data        
      })
    })
    this.matiereService.getMatiere().subscribe(data =>{
      this.matiere = data
    })
    this.professeurService.getProfesseur().subscribe(data =>{
      this.professeur = data
    })
    this.groupeService.getGroupe().subscribe(data =>{
      this.groupe = data
    })
  }
  Submit(){
    this.eleveService.updateEleve(this.eleveForm.value,this.id).subscribe(() =>{
      this.showAlert = true 
      setTimeout(() =>{
        this.showAlert = false
        window.history.back()
      },2000)
    })
  }
}
