import { ApiProperty } from "@nestjs/swagger";
import { Eleve } from "src/eleve/entities/eleve.entity";
import { Matiere } from "src/matiere/entities/matiere.entity";
import { Professeur } from "src/professeur/entities/professeur.entity";
import { Salle } from "src/salle/entities/salle.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryColumnCannotBeNullableError, PrimaryGeneratedColumn } from "typeorm";

@Entity("Seance")
export class Seance {

    @PrimaryGeneratedColumn()
    id:number
    
    @ApiProperty()
    @Column({nullable: true})
    date_1: Date;

    @ApiProperty()
    @Column({nullable: true})
    date_2: Date;

    @ApiProperty()
    @Column({nullable: true})
    date_3: Date;

    @ApiProperty()
    @Column({nullable: true})
    date_4: Date;

    @ApiProperty()
    @Column({default : true})
    etat : boolean

    @ApiProperty()
    @Column({default : true})
    status : boolean

    @ManyToOne(() => Eleve, (eleve) => eleve.seance)
    eleveId: Seance[]

    @ManyToOne(() => Professeur, (prof) => prof.seance)
    ProfId: Professeur[]

    @ManyToOne(() => Matiere, (matiere) => matiere.seance)
    matiereId: Matiere[]

    @ManyToOne(() => Salle, (salle) => salle.seance)
    salleId: Salle[]
}