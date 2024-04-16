import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Eleve } from '../eleve/eleve';
import { Professeur } from '../professeur/professeur';
import { Matiere } from '../matiere/matiere';
import { EleveService } from '../eleve/eleve.service';
import { MatiereService } from '../matiere/matiere.service';
import { ProfesseurService } from '../professeur/professeur.service';
import { SalleService } from '../salle/salle.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { GroupeService } from '../groupe/groupe.service';
import { Groupe } from '../groupe/groupe';
import { PresenceService } from './presence.service';

@Component({
  selector: 'app-presence',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule, FormsModule],
  templateUrl: './presence.component.html',
  styleUrls: ['./presence.component.css']
})
export class PresenceComponent implements OnInit {
  eleve: Eleve [] | any
  professeur: Professeur | any
  matiere: Matiere | any
  professeurSelectionne!: any;
  matiereSelectionnee!: any;
  groupeSelectionnee!: any;
  groupe: Groupe | any
  seanceForm = new FormGroup({
    date_1: new FormControl(''),
    date_2: new FormControl(''),
    date_3: new FormControl(''),
    date_4: new FormControl(''),
    matiereId: new FormControl('Choisir un matiere', Validators.required),
    groupeId: new FormControl('Choisir un groupe', Validators.required),
    ProfId: new FormControl('Choisir un professeur', Validators.required),
    eleveId: new FormControl(''),
  });
showAlert : boolean = false

  constructor(
    private professeurService: ProfesseurService,
    private matiereService: MatiereService,
    private eleveService: EleveService,
    private presenceService: PresenceService,
    private groupeService: GroupeService
  ) { }
  ngOnInit(): void {
    this.professeurService.getProfesseur().subscribe(data => {
      this.professeur = data
    })

    this.groupeService.getGroupe().subscribe(data => {
      this.groupe = data
    })
    this.matiereService.getMatiere().subscribe(data => {
      this.matiere = data
    })
  }
  enregistrerEleve() {
    const profData = this.seanceForm.value.ProfId
    const MatData = this.seanceForm.value.matiereId
    const groupeData = this.seanceForm.value.groupeId
    this.eleveService.geteleveByProfMat(profData, MatData, groupeData).subscribe(data => {
      this.eleve = data
    })
  }
  Submit(id:any){
    const appointmentData = {
      matiereId : this.seanceForm.value.matiereId,
      groupeId: this.seanceForm.value.groupeId,
      ProfId: this.seanceForm.value.ProfId,
      eleveId : id,
      date_1: this.seanceForm.value.date_1,
      date_2: this.seanceForm.value.date_2,
      date_3: this.seanceForm.value.date_3,
      date_4: this.seanceForm.value.date_4,
    };    
    this.presenceService.addSeance(appointmentData).subscribe(() => {
      this.seanceForm.patchValue({
        date_1: null,
        date_2: null,
        date_3: null,
        date_4: null
      });
      setTimeout(() =>{
        this.showAlert = true
      },1000)
    })
  }
}
