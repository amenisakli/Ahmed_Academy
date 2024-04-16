import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Salle } from '../salle';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SalleService } from '../salle.service';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-update',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterModule],
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  id!: number
  salle: Salle | any
  salleForm = new FormGroup ({
    numero :new FormControl()
  })
  showAlert:boolean =false
  constructor(private salleService: SalleService, private router: ActivatedRoute) { }
  ngOnInit(): void {
    this.router.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));
      this.salleService.getSalleById(this.id).subscribe(
        data => {
          this.salle = data;          
        });
    });
  }
  Submit(){
    this.salleService.updateSalle(this.id,this.salleForm.value).subscribe(data =>{
      this.showAlert = true
      setTimeout(() => {
        this.showAlert = false;
        window.history.back();
    }, 2000);
    })
  }
}
