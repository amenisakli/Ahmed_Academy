import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateSalleDto } from './dto/create-salle.dto';
import { UpdateSalleDto } from './dto/update-salle.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Salle } from './entities/salle.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SalleService {

  constructor(
    @InjectRepository(Salle)
    private salleRepository : Repository<Salle>
  ){}

 async create(createSalleDto: CreateSalleDto) {
  const salle = await this.salleRepository.create({...createSalleDto})
    return this.salleRepository.save(salle);
  }

  async findAll() {
    return this.salleRepository.find({where : {status : true}});
  }

  async  findOne(id: number) {
    return this.salleRepository.findOne({where : {id}});
  }
  async update(id: number, updateSalleDto: UpdateSalleDto) {
    const salle = await this.salleRepository.preload({
      id ,
      ...updateSalleDto
    })
    if(!salle){
      new BadRequestException('Somthing Bad')
    }
    return this.salleRepository.save(salle)
  }

  async remove(id: number) {
    const salle = await this.salleRepository.findOne({where : {id}})
    if(!salle){
      new BadRequestException('Somthing Bad')
    }
    salle.status = false
    return this.salleRepository.save(salle)
  }
}
