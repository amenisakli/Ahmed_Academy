import { ApiProperty } from '@nestjs/swagger';

export class UpdateEleveDto  {
    @ApiProperty()
    name:string

    @ApiProperty()
    lastname:string

    @ApiProperty()
    tel:string

    @ApiProperty()
    telParent:string

    @ApiProperty()
    matiereId:any
    @ApiProperty()
    ProfId:any

    @ApiProperty()
    groupeId:any
}