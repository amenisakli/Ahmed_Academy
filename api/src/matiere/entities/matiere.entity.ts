import { Eleve } from "src/eleve/entities/eleve.entity";
import { Professeur } from "src/professeur/entities/professeur.entity";
import { Seance } from "src/seance/entities/seance.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("Matiere")
export class Matiere {

    @PrimaryGeneratedColumn()
    id:number

    @Column({nullable:true})
    name:string 

    @Column({default:true})
    status:boolean
    
    @OneToMany(() => Professeur, professeur => professeur.matiereId)
    professeur: Professeur[];

    @OneToMany(() => Eleve, eleve => eleve.matiereId)
    eleve: Eleve[];

    @OneToMany(() => Seance, seance => seance.matiereId)
    seance: Seance[];

}
