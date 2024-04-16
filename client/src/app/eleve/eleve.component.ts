import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EleveService } from './eleve.service';
import { RouterModule } from '@angular/router';
import { Eleve } from './eleve';

@Component({
  selector: 'app-eleve',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './eleve.component.html',
  styleUrls: ['./eleve.component.css']
})
export class EleveComponent implements OnInit{
  eleve:Eleve | any
  SelectedidEleve: any
  showModalEleve: boolean = false
  constructor(private eleveService:EleveService){}
  ngOnInit(): void {
    this.eleveService.getEleve().subscribe(data=>{
      this.eleve = data.sort((a:any,b:any)=> b.id - a.id)      
    })
  }
  openEleve(id: any) {
    this.SelectedidEleve = id
    this.showModalEleve = true
  }
  SupprimerEleve() {
    this.eleveService.deletetEleve(this.SelectedidEleve).subscribe(() => {
      window.location.href = window.location.href
      this.showModalEleve = false
    })
  }
}
