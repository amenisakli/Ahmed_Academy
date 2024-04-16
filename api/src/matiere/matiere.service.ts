import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateMatiereDto } from './dto/create-matiere.dto';
import { UpdateMatiereDto } from './dto/update-matiere.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Matiere } from './entities/matiere.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MatiereService {
  constructor(
    @InjectRepository(Matiere)
    private matiereRepository: Repository<Matiere>  ){}

 async create(createMatiereDto: CreateMatiereDto) {
    const matiere = await this.matiereRepository.create({...createMatiereDto}) 
    return this.matiereRepository.save(matiere)
  }

  async findAll() {
    return await this.matiereRepository.find({where : { status : true}}) ;
  }

 async findOne(id: number) {
    return await this.matiereRepository.findOne({where : {id}});
  }

 async update(id: number, updateMatiereDto: UpdateMatiereDto) {
    const matiere = await this.matiereRepository.preload({
      id,
      ...updateMatiereDto
    })
    if(!matiere){
     new BadRequestException('Somthing Bad')
    }
    return this.matiereRepository.save(matiere)
  }

async  remove(id: number) {
    const matiere = await this.matiereRepository.findOne({ where : {id}})
    if(!matiere){
      new BadRequestException('Somthing Bad')
     }
     matiere.status = false
     return this.matiereRepository.save(matiere)
  }
}
