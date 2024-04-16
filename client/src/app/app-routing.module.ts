import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AcceuilComponent } from './acceuil/acceuil.component';

const routes: Routes = [
  {path:'',component:AcceuilComponent},
  
  // salle
  {path:'salle',loadComponent: () => import('./salle/salle.component').then(m => m.SalleComponent)} ,
  {path:'salle/add',loadComponent: () => import('./salle/add/add.component').then(m => m.AddComponent)} ,
  {path:'salle/update/:id',loadComponent: () => import('./salle/update/update.component').then(m => m.UpdateComponent)} ,

  // groupe
  {path:'groupe',loadComponent: () => import('./groupe/groupe.component').then(m => m.GroupeComponent)} ,
  {path:'groupe/add',loadComponent: () => import('./groupe/add/add.component').then(m => m.AddComponent)} ,
  {path:'groupe/update/:id',loadComponent: () => import('./groupe/update/update.component').then(m => m.UpdateComponent)} ,

  // matiere
  {path:'matiere',loadComponent: () => import('./matiere/matiere.component').then(m => m.MatiereComponent)} ,
  {path:'matiere/add',loadComponent: () => import('./matiere/add/add.component').then(m => m.AddComponent)} ,
  {path:'matiere/update/:id',loadComponent: () => import('./matiere/update/update.component').then(m => m.UpdateComponent)} ,

  //professeur
  {path:'professeur',loadComponent: () => import('./professeur/professeur.component').then(m => m.ProfesseurComponent)} ,
  {path:'professeur/add',loadComponent: () => import('./professeur/add/add.component').then(m => m.AddComponent)} ,
  {path:'professeur/update/:id',loadComponent: () => import('./professeur/update/update.component').then(m => m.UpdateComponent)} ,

    //eleve
    {path:'eleve',loadComponent: () => import('./eleve/eleve.component').then(m => m.EleveComponent)} ,
    {path:'eleve/add',loadComponent: () => import('./eleve/add/add.component').then(m => m.AddComponent)} ,
    {path:'eleve/update/:id',loadComponent: () => import('./eleve/update/update.component').then(m => m.UpdateComponent)} ,

    {path:'seance',loadComponent: () => import('./presence/presence.component').then(m => m.PresenceComponent)} ,

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
