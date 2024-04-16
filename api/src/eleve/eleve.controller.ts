import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EleveService } from './eleve.service';
import { CreateEleveDto } from './dto/create-eleve.dto';
import { UpdateEleveDto } from './dto/update-eleve.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Eleve')
@Controller('eleve')
export class EleveController {
  constructor(private readonly eleveService: EleveService) {}

  @Post()
  create(@Body() createEleveDto: CreateEleveDto) {
    return this.eleveService.create(createEleveDto);
  }

  @Get()
  findAll() {
    return this.eleveService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eleveService.findOne(+id);
  }

  @Get('ProfMat/:idProf/:idMat/:idGrp')
  findProfMat(@Param('idProf') idProf: number,@Param('idMat') idMat: number,@Param('idGrp') idGrp: number) {
    return this.eleveService.findOneByProfMat(idProf,idMat,idGrp);
  }  

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEleveDto: UpdateEleveDto) {
    return this.eleveService.update(+id, updateEleveDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eleveService.remove(+id);
  }
}
