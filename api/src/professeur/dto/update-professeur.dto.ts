import { ApiProperty, PartialType } from '@nestjs/swagger';

export class UpdateProfesseurDto{
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
