import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatiereService } from '../matiere.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterModule],
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  matiereForm = new FormGroup(
    {
      name: new FormControl()
    })
    showAlert : boolean = false
    constructor(private matiereService:MatiereService){}

    Submit(){
      this.matiereService.addMatiere(this.matiereForm.value).subscribe(()=>{
        this.showAlert = true
        setTimeout(() =>{
          this.showAlert = false
          window.history.back()
        },2000)
      })
    }
}
