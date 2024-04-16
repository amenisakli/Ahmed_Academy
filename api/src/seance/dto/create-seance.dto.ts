import { ApiProperty } from "@nestjs/swagger"

export class CreateSeanceDto {
    @ApiProperty()
    date_1:Date

    @ApiProperty()
    date_2:Date

    @ApiProperty()
    date_3:Date

    @ApiProperty()
    date_4:Date

    @ApiProperty()
    matiereId:any

    @ApiProperty()
    ProfId:any

    @ApiProperty()
    eleveId:any
}
