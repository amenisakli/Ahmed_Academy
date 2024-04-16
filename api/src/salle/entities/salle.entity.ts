import { ApiProperty } from "@nestjs/swagger";
import { Seance } from "src/seance/entities/seance.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('Salle')
export class Salle {
    @PrimaryGeneratedColumn()
    id:number
    
    @ApiProperty()
    @Column({nullable:true})
    numero:number 

    @ApiProperty()
    @Column({default:true})
    status:boolean

    @OneToMany(() => Seance, seance => seance.salleId)
    seance: Seance[];
}
