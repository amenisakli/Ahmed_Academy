import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProfesseurService } from '../professeur.service';
import { MatiereService } from 'src/app/matiere/matiere.service';
import { Matiere } from 'src/app/matiere/matiere';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterModule],
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit{
  professeurForm = new FormGroup({
    name: new FormControl(''),
    lastname: new FormControl(''),
    tel: new FormControl(''),
    email: new FormControl(''),
    matiereId: new FormControl('Choisir un matiere', Validators.required),
  });
  matiere : Matiere | any
showAlert : boolean = false
constructor (private professeurService:ProfesseurService,private matiereService:MatiereService){}
  ngOnInit(): void {
    this.matiereService.getMatiere().subscribe(data =>{
      this.matiere = data
    })
  }
Submit(){
  this.professeurService.addProfesseur(this.professeurForm.value).subscribe(()=>{
    this.showAlert = true
    setTimeout(() =>{
      this.showAlert = false
      window.history.back()
    },2000)
  })
}
}
