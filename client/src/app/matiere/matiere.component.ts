import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatiereService } from './matiere.service';
import { Matiere } from './matiere';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-matiere',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './matiere.component.html',
  styleUrls: ['./matiere.component.css']
})
export class MatiereComponent implements OnInit {
  matiere: Matiere | any
  SelectedidMat: any
  showModalMat: boolean = false
  constructor(private matiereService: MatiereService) { }
  ngOnInit(): void {
    this.matiereService.getMatiere().subscribe(data => {
      this.matiere = data.sort((a: any, b: any) => b.id - a.id);
    })
  }
  openMatiere(id: any) {
    this.SelectedidMat = id
    this.showModalMat = true
  }
  SupprimerMat() {
    this.matiereService.deleteMatiere(this.SelectedidMat).subscribe(() => {
      window.location.href = window.location.href
      this.showModalMat = false
    })
  }
}
