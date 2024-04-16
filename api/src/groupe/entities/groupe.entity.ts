import { ApiProperty } from "@nestjs/swagger";
import { Eleve } from "src/eleve/entities/eleve.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("Groupe")
export class Groupe {
    @PrimaryGeneratedColumn()
    id:number
    
    @ApiProperty()
    @Column({nullable:true})
    name:string 

    @ApiProperty()
    @Column({default:true})
    status:boolean

    @OneToMany(() => Eleve, eleve => eleve.groupeId)
    eleve: Eleve[];
}
