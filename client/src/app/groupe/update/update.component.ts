import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupeService } from '../groupe.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Groupe } from '../groupe';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-update',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterModule],
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit{
  id:any
  groupe:Groupe | any 
  groupeForm = new FormGroup ({
    name : new FormControl()
  })
  showAlert:boolean = false
  constructor(private groupeService:GroupeService,private router:ActivatedRoute){}
  ngOnInit(): void {
    this.router.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));
      this.groupeService.getGroupeById(this.id).subscribe(
        data => {
          this.groupe = data;                    
        });
    }); 
   }
   Submit(){
    this.groupeService.updateGroupe(this.id,this.groupeForm.value).subscribe(data =>{
      this.showAlert = true
      setTimeout(() => {
        this.showAlert = false;
        window.history.back();
    }, 2000);
    })
  }
}
