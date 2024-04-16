import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { GroupeService } from '../groupe.service';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  groupeForm = new FormGroup(
    {
      name: new FormControl()
    })
    showAlert:boolean = false
  constructor(private groupeService:GroupeService){}

Submit(){
  this.groupeService.addGroupe(this.groupeForm.value).subscribe(data =>{
    this.showAlert = true
    setTimeout(() => {
      this.showAlert = false;
      window.history.back();
  }, 2000);
  })
}
}
