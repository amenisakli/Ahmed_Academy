import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SalleService } from '../salle.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterModule],
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  salleForm = new FormGroup(
    {
      numero: new FormControl()
    })
    showAlert:boolean = false
  constructor(private salleService:SalleService){}

Submit(){
  this.salleService.addSalle(this.salleForm.value).subscribe(data =>{
    this.showAlert = true
    setTimeout(() => {
      this.showAlert = false;
      window.history.back();
  }, 2000);
  })
}
}
