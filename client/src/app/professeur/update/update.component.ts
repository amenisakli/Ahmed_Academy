import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Professeur } from '../professeur';
import { Matiere } from 'src/app/matiere/matiere';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProfesseurService } from '../professeur.service';
import { MatiereService } from 'src/app/matiere/matiere.service';

@Component({
  selector: 'app-update',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterModule],
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit{
professeur :Professeur | any 
matiere : Matiere | any
showAlert :boolean = false
id:any
SelectedMatiere: string = '';

professeurForm = new FormGroup({
  name: new FormControl(''),
  lastname: new FormControl(''),
  tel: new FormControl(''),
  email: new FormControl(''),
  matiereId: new FormControl('', Validators.required),
});
constructor(private router:ActivatedRoute,private professeurService:ProfesseurService , private matiereService:MatiereService){}
  ngOnInit(): void {
    this.router.paramMap.subscribe(params =>{
      this.id = Number(params.get('id'))
      this.professeurService.getProfesseurById(this.id).subscribe(data =>{
        this.professeur = data
      })
    })
    this.matiereService.getMatiere().subscribe(data =>{
      this.matiere = data
    })
  }
  Submit(){
    this.professeurService.updateProfesseur(this.professeurForm.value,this.id).subscribe(() =>{
      this.showAlert = true 
      setTimeout(() =>{
        this.showAlert = false
        window.history.back()
      },2000)
    })
  }
}
