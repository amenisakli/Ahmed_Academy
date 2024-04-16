import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-acceuil',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {
  @Input() year: number = new Date().getFullYear(); // Année par défaut

  currentMonth: number = 0; // Mois actuel
  months: any[] = []; // Tableau des mois
  weekDays: string[] = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam']; // Jours de la semaine

  constructor() { }

  ngOnInit(): void {
    this.generateCalendar();
  }

  // Générer le calendrier
  generateCalendar(): void {
    for (let i = 0; i < 12; i++) {
      const month = {
        name: this.getMonthName(i),
        days: this.getDaysOfMonth(i, this.year)
      };
      this.months.push(month);
    }
  }

  // Obtenir le nom du mois
  getMonthName(month: number): string {
    return ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'][month];
  }

  // Obtenir le nombre de jours dans un mois
  getNoOfDays(month: number, year: number): number {
    const d = new Date(year, month, 0);
    return d.getDate();
  }

  // Obtenir les jours d'un mois
  getDaysOfMonth(month: number, year: number): any[] {
    const days = [];
    const noOfDays = this.getNoOfDays(month, year);
    const firstDay = new Date(year, month, 1).getDay(); // Jour de la semaine du premier jour du mois

    for (let i = 0; i < noOfDays; i++) {
      const day = {
        date: i + 1,
        disabled: (i + firstDay) % 7 === 0 || (i + firstDay) % 7 === 6 // Désactiver les week-ends
      };
      days.push(day);
    }

    return days;
  }

  // Changer de mois
  changeMonth(month: number): void {
    this.currentMonth = month;
  }

  // Obtenir le mois précédent
  getPreviousMonth(): void {
    if (this.currentMonth === 0) {
      this.currentMonth = 11;
      this.year--;
    } else {
      this.currentMonth--;
    }
  }

  // Obtenir le mois suivant
  getNextMonth(): void {
    if (this.currentMonth === 11) {
      this.currentMonth = 0;
      this.year++;
    } else {
      this.currentMonth++;
    }
  }


}
