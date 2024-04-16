import { Groupe } from "src/groupe/entities/groupe.entity";
import { Matiere } from "src/matiere/entities/matiere.entity";
import { Professeur } from "src/professeur/entities/professeur.entity";
import { Seance } from "src/seance/entities/seance.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('Eleve')
export class Eleve {
    @PrimaryGeneratedColumn()
    id:number

    @Column({nullable:true})
    name:string

    @Column({nullable:true})
    lastname:string

    @Column({nullable:true})
    tel:string

    @Column({nullable:true})
    telParent:string
    
    @Column({default:true})
    status:boolean

    @ManyToOne(() => Matiere, (matiere) => matiere.eleve)
    matiereId: Matiere[]

    @ManyToOne(() => Professeur, (professeur) => professeur.eleve)
    ProfId: Professeur[]

    @ManyToOne(() => Groupe, (groupe) => groupe.eleve)
    groupeId: Groupe[]

    @OneToMany(() => Seance, seance => seance.eleveId)
    seance: Seance[];
}




