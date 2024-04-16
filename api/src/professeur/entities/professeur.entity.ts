import { Eleve } from "src/eleve/entities/eleve.entity";
import { Matiere } from "src/matiere/entities/matiere.entity";
import { Seance } from "src/seance/entities/seance.entity";
import { Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('Professeur')
export class Professeur {

    @PrimaryGeneratedColumn()
    id:number

    @Column({nullable:true})
    name:string

    @Column({nullable:true})
    lastname:string

    @Column({nullable:true})
    tel:string

    @Column({nullable:true})
    email:string
    
    @Column({default:true})
    status:boolean

    @ManyToOne(() => Matiere, (matiere) => matiere.professeur)
    matiereId: Matiere[]

    @OneToMany(() => Eleve, eleve => eleve.ProfId)
    eleve: Eleve[];

    @OneToMany(() => Seance, seance => seance.ProfId)
    seance: Seance[];
}
