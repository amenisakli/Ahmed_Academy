import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProfesseurService } from 'src/app/professeur/professeur.service';
import { MatiereService } from 'src/app/matiere/matiere.service';
import { Matiere } from 'src/app/matiere/matiere';
import { Professeur } from 'src/app/professeur/professeur';
import { Groupe } from 'src/app/groupe/groupe';
import { GroupeService } from 'src/app/groupe/groupe.service';
import { EleveService } from '../eleve.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterModule],
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  eleveForm = new FormGroup({
    name: new FormControl(''),
    lastname: new FormControl(''),
    tel: new FormControl(''),
    telParent: new FormControl(''),
    email: new FormControl(''),
    matiereId: new FormControl('Choisir un matiere', Validators.required),
    groupeId: new FormControl('Choisir un groupe', Validators.required),
    ProfId: new FormControl('Choisir un professeur', Validators.required),

  });
  matiere : Matiere | any
  professeur :Professeur | any
  groupe : Groupe | any
showAlert : boolean = false
constructor (
  private professeurService:ProfesseurService,
  private matiereService:MatiereService,
  private groupeService:GroupeService,
  private eleveService:EleveService
){}
  ngOnInit(): void {
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
  this.eleveService.addEleve(this.eleveForm.value).subscribe((data)=>{    
    this.showAlert = true
    setTimeout(() =>{
      this.showAlert = false
      window.history.back()
    },2000)
  })
}
}
