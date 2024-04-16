import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Salle } from './salle';
import { SalleService } from './salle.service';
import { RouterModule, RouterPreloader } from '@angular/router';

@Component({
  selector: 'app-salle',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './salle.component.html',
  styleUrls: ['./salle.component.css']
})
export class SalleComponent implements OnInit{
salle : Salle | any 
SelectedidSall!: any
showModalSal:boolean = false
constructor(private salleService:SalleService){}
  ngOnInit(): void {
    this.salleService.getSalle().subscribe(data => {
      this.salle = data.sort((a:any, b:any) => b.id - a.id);
    
    })
  }
  openSalle(id:any){
    this.SelectedidSall = id
    this.showModalSal = true
  }
  SupprimerSal(){
    this.salleService.deleteSalle(this.SelectedidSall).subscribe(() => {
      window.location.href = window.location.href
      this.showModalSal = false
    })
  }
}
