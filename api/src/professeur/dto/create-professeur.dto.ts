import { ApiProperty } from "@nestjs/swagger";

export class CreateProfesseurDto {
    @ApiProperty()
    name:string

    @ApiProperty()
    lastname:string

    @ApiProperty()
    tel:string

    @ApiProperty()
    email:string

    @ApiProperty()
    matiereId:any
}
