import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MatiereService } from '../matiere.service';
import { Matiere } from '../matiere';

@Component({
  selector: 'app-update',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterModule],
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit{
  id:any
  matiere:Matiere | any
  showAlert :boolean = false
  matiereForm = new FormGroup ({
    name : new FormControl()
  })
  constructor(private matiereService:MatiereService,private router:ActivatedRoute){}
  ngOnInit(): void {
    this.router.paramMap.subscribe(params =>{
      this.id = Number(params.get('id'))
      this.matiereService.getMatiereById(this.id).subscribe(data =>{
        this.matiere = data
      })
    })
  }
Submit(){
  this.matiereService.updateMatiere(this.id,this.matiereForm.value).subscribe(() =>{
    this.showAlert = true 
    setTimeout(() =>{
      this.showAlert = false
      window.history.back()
    },2000)
  })
}
}
